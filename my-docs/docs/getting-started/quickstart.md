---
sidebar_position: 4
---

# Quickstart

<div className="steps">
  <div className="step">
    <div className="step-num">1</div>
    <div className="step-body">
      <div className="step-title">Generate an API key</div>
      <div className="step-text">Settings → Connections → API Keys → Generate Key. Copy it immediately — shown only once.</div>
    </div>
  </div>
  <div className="step">
    <div className="step-num">2</div>
    <div className="step-body">
      <div className="step-title">Make your first request</div>
      <div className="step-text">Call <code>/v1/suggest</code> with a lead's reply text and receive an AI suggestion back.</div>
    </div>
  </div>
  <div className="step">
    <div className="step-num">3</div>
    <div className="step-body">
      <div className="step-title">Register a webhook</div>
      <div className="step-text">Get real-time events pushed to your endpoint whenever something happens in SalesLobe.</div>
    </div>
  </div>
  <div className="step">
    <div className="step-num">4</div>
    <div className="step-body">
      <div className="step-title">Connect your tools</div>
      <div className="step-text">Use Make.com, Airtable, HubSpot or any webhook-compatible platform to automate your workflow.</div>
    </div>
  </div>
</div>

```bash title="First request"
curl -X POST https://<base>/v1/suggest \
  -H "X-SalesLobe-Key: sl_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{"reply_received":"Sounds interesting, tell me more","lead_name":"John"}'
```
