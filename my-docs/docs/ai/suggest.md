---
sidebar_position: 1
---

import ApiPlayground from '@site/src/components/ApiPlayground';

# POST /v1/suggest

<div className="endpoint-header">
  <span className="method-pill method-post">POST</span>
  <code>/v1/suggest</code>
</div>

<span className="tag tag-scope">scope: suggest</span>
<span className="tag tag-credit">1 credit</span>

Ask Corty for a reply suggestion based on lead context. Corty draws from your workspace's learned tone profile and past edits to calibrate the response.

## Try it

<ApiPlayground
  method="POST"
  endpoint="/v1/suggest"
  defaultBody={`{
  "reply_received": "Sounds interesting, tell me more about pricing.",
  "lead_name": "John",
  "lead_email": "john@acme.com",
  "company": "Acme Corp",
  "medium": "email",
  "campaign_context": "B2B SaaS outreach for CRM tools"
}`}
/>

## Parameters

| Field | Type | | Description |
|-------|------|---|-------------|
| `reply_received` | string | <span className="param-req">required</span> | The incoming reply from the lead |
| `lead_name` | string | <span className="param-opt">optional</span> | Lead's first name for personalization |
| `lead_email` | string | <span className="param-opt">optional</span> | Lead's email address |
| `company` | string | <span className="param-opt">optional</span> | Lead's company name |
| `campaign_context` | string | <span className="param-opt">optional</span> | Brief campaign description for context |
| `medium` | string | <span className="param-opt">optional</span> | `email` (default), `linkedin`, `whatsapp` — influences suggestion style |
| `tone` | string | <span className="param-opt">optional</span> | Desired tone override (default: professional and conversational) |
| `previous_messages` | array | <span className="param-opt">optional</span> | Prior thread messages (max 10). Each needs `role` (outbound\|reply) and `content` |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="request" label="Request" default>

```json
{
  "reply_received": "Sounds interesting, tell me more about pricing.",
  "lead_name": "John",
  "lead_email": "john@acme.com",
  "company": "Acme Corp",
  "medium": "email",
  "campaign_context": "B2B SaaS outreach for CRM tools",
  "previous_messages": [
    { "role": "outbound", "content": "Hi John, I noticed Acme Corp is scaling..." },
    { "role": "reply",    "content": "Sounds interesting, tell me more about pricing." }
  ]
}
```

  </TabItem>
  <TabItem value="response" label="Response 200">

```json
{
  "suggestion":        "Hey John, great that you're curious about pricing...",
  "strategy":          "Address pricing interest directly, propose a quick call",
  "confidence":        0.87,
  "medium":            "email",
  "model":             "claude-sonnet-4-6",
  "credits_used":      1,
  "credits_remaining": 4523
}
```

  </TabItem>
</Tabs>
