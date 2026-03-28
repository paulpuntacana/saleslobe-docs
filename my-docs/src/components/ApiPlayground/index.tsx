import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface Param {
  name: string;
  in: 'path' | 'query' | 'body';
  type?: 'string' | 'number' | 'boolean';
  required?: boolean;
  description?: string;
  example?: string;
}

interface ApiPlaygroundProps {
  method: Method;
  endpoint: string;
  baseUrl?: string;
  params?: Param[];
  defaultBody?: string;
}

const METHOD_COLORS: Record<Method, string> = {
  GET:    '#10b981',
  POST:   '#7A5AF8',
  PATCH:  '#f59e0b',
  DELETE: '#ef4444',
};

const BASE_URL = 'https://slazbvfvliieskvkjtav.supabase.co/functions/v1/api-gateway';

function buildUrl(base: string, endpoint: string, pathValues: Record<string,string>, queryValues: Record<string,string>): string {
  let url = base + endpoint;
  Object.entries(pathValues).forEach(([k, v]) => {
    url = url.replace(`{${k}}`, encodeURIComponent(v) || `{${k}}`);
  });
  const qs = Object.entries(queryValues)
    .filter(([, v]) => v !== '')
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  return qs ? `${url}?${qs}` : url;
}

export default function ApiPlayground({ method, endpoint, baseUrl = BASE_URL, params = [], defaultBody = '' }: ApiPlaygroundProps) {
  const [apiKey, setApiKey] = useState('');
  const [pathValues, setPathValues] = useState<Record<string,string>>({});
  const [queryValues, setQueryValues] = useState<Record<string,string>>({});
  const [body, setBody] = useState(defaultBody);
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sl_api_key');
    if (saved) setApiKey(saved);
    const pv: Record<string,string> = {};
    const qv: Record<string,string> = {};
    params.forEach(p => {
      if (p.in === 'path') pv[p.name] = p.example || '';
      if (p.in === 'query') qv[p.name] = p.example || '';
    });
    setPathValues(pv);
    setQueryValues(qv);
  }, []);

  const handleApiKey = (v: string) => {
    setApiKey(v);
    localStorage.setItem('sl_api_key', v);
  };

  const fullUrl = buildUrl(baseUrl, endpoint, pathValues, queryValues);

  const send = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);
    try {
      const opts: RequestInit = {
        method,
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      };
      if (['POST', 'PATCH'].includes(method) && body.trim()) {
        opts.body = body;
      }
      const res = await fetch(fullUrl, opts);
      setStatus(res.status);
      const text = await res.text();
      try {
        setResponse(JSON.stringify(JSON.parse(text), null, 2));
      } catch {
        setResponse(text);
      }
    } catch (e: unknown) {
      setResponse(`Network error: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setLoading(false);
    }
  };

  const copyCurl = () => {
    const headers = [`-H "Authorization: Bearer ${apiKey || '<YOUR_API_KEY>'}"`, '-H "Content-Type: application/json"'];
    const bodyFlag = ['POST', 'PATCH'].includes(method) && body.trim() ? ` \\\n  -d '${body}'` : '';
    const curl = `curl -X ${method} \\\n  ${headers.join(' \\\n  ')} \\\n  "${fullUrl}"${bodyFlag}`;
    navigator.clipboard.writeText(curl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const statusOk = status !== null && status >= 200 && status < 300;

  const pathParams  = params.filter(p => p.in === 'path');
  const queryParams = params.filter(p => p.in === 'query');
  const bodyParams  = params.filter(p => p.in === 'body');

  return (
    <div className={styles.playground}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.methodBadge} style={{ color: METHOD_COLORS[method], borderColor: METHOD_COLORS[method] + '40', background: METHOD_COLORS[method] + '15' }}>
          {method}
        </span>
        <code className={styles.endpointPath}>{endpoint}</code>
        <div className={styles.headerActions}>
          <button className={styles.curlBtn} onClick={copyCurl} title="Copy as cURL">
            {copied ? '✓ Copied' : 'cURL'}
          </button>
        </div>
      </div>

      <div className={styles.body}>
        {/* API Key */}
        <div className={styles.field}>
          <label className={styles.label}>API Key</label>
          <input
            className={styles.input}
            type="password"
            placeholder="sk_live_••••••••••••••••"
            value={apiKey}
            onChange={e => handleApiKey(e.target.value)}
            autoComplete="off"
          />
          <span className={styles.hint}>Saved locally in your browser</span>
        </div>

        {/* Path params */}
        {pathParams.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Path Parameters</div>
            {pathParams.map(p => (
              <div className={styles.field} key={p.name}>
                <label className={styles.label}>
                  {p.name}
                  {p.required && <span className={styles.required}>required</span>}
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={p.example || p.name}
                  value={pathValues[p.name] || ''}
                  onChange={e => setPathValues(v => ({ ...v, [p.name]: e.target.value }))}
                />
                {p.description && <span className={styles.hint}>{p.description}</span>}
              </div>
            ))}
          </div>
        )}

        {/* Query params */}
        {queryParams.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Query Parameters</div>
            {queryParams.map(p => (
              <div className={styles.field} key={p.name}>
                <label className={styles.label}>
                  {p.name}
                  {p.required && <span className={styles.required}>required</span>}
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={p.example || ''}
                  value={queryValues[p.name] || ''}
                  onChange={e => setQueryValues(v => ({ ...v, [p.name]: e.target.value }))}
                />
                {p.description && <span className={styles.hint}>{p.description}</span>}
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        {(['POST', 'PATCH'].includes(method) || bodyParams.length > 0) && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Request Body</div>
            <textarea
              className={styles.textarea}
              value={body}
              onChange={e => setBody(e.target.value)}
              spellCheck={false}
              rows={Math.max(4, body.split('\n').length + 1)}
            />
          </div>
        )}

        {/* URL preview */}
        <div className={styles.urlPreview}>
          <span className={styles.urlLabel}>URL</span>
          <code className={styles.urlValue}>{fullUrl}</code>
        </div>

        {/* Send button */}
        <button
          className={styles.sendBtn}
          onClick={send}
          disabled={loading || !apiKey}
          style={{ background: METHOD_COLORS[method] }}
        >
          {loading ? <span className={styles.spinner} /> : null}
          {loading ? 'Sending…' : `Send ${method} Request`}
        </button>
        {!apiKey && <p className={styles.keyHint}>Enter your API key above to send requests</p>}

        {/* Response */}
        {(response !== null || status !== null) && (
          <div className={styles.response}>
            <div className={styles.responseHeader}>
              <span className={styles.responseTitle}>Response</span>
              {status !== null && (
                <span className={styles.statusBadge} style={{ color: statusOk ? '#10b981' : '#ef4444', background: (statusOk ? '#10b981' : '#ef4444') + '15', borderColor: (statusOk ? '#10b981' : '#ef4444') + '40' }}>
                  {status}
                </span>
              )}
            </div>
            <pre className={styles.responseBody}>{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
