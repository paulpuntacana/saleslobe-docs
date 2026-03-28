---
sidebar_position: 2
---

import ApiPlayground from '@site/src/components/ApiPlayground';

# POST /v1/suggest/feedback

<div className="endpoint-header">
  <span className="method-pill method-post">POST</span>
  <code>/v1/suggest/feedback</code>
</div>

<span className="tag tag-scope">scope: suggest</span>
<span className="tag tag-free">0 credits</span>

Send feedback on a Corty suggestion so the system learns. Essential for white-label partners and external tools.

:::note
Corty only learns if the edit is less than 80% different from the original — larger rewrites are discarded.
:::

## Try it

<ApiPlayground
  method="POST"
  endpoint="/v1/suggest/feedback"
  defaultBody={`{
  "accepted": true,
  "original_suggestion": "Hey John, great that you're curious about pricing...",
  "edited_version": "Hi John! Happy to walk you through our pricing on a quick call.",
  "medium": "email"
}`}
/>

## Parameters

| Field | Type | | Description |
|-------|------|---|-------------|
| `accepted` | boolean | <span className="param-req">required</span> | Whether the suggestion was actually used |
| `original_suggestion` | string | <span className="param-opt">optional</span> | Corty's original suggestion text |
| `edited_version` | string | <span className="param-opt">optional</span> | The version the user actually sent (triggers learning) |
| `medium` | string | <span className="param-opt">optional</span> | `email` (default), `linkedin`, `whatsapp` |
| `client_id` | uuid | <span className="param-opt">optional</span> | Client context for targeted learning |
| `suggestion_id` | string | <span className="param-opt">optional</span> | ID of the original logged suggestion |

## Response

```json
{ "received": true, "learned": true, "medium": "email", "edit_distance": 0.23 }
```
