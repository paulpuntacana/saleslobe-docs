---
sidebar_position: 5
---

# POST /v1/replies/:id/send

<div className="endpoint-header">
  <span className="method-pill method-post">POST</span>
  <code>/v1/replies/:id/send</code>
</div>

<span className="tag tag-scope">scope: replies.send</span>
<span className="tag tag-free">0 credits</span>

Approve a Corty suggestion and send it via Smartlead. Closes the loop for agencies working in Make or Slack — no need to return to the SalesLobe UI.

## Parameters

| Field | Type | | Description |
|-------|------|---|-------------|
| `body` | string | <span className="param-req">required</span> | The reply text to send |
| `original_suggestion` | string | <span className="param-opt">optional</span> | Corty's original suggestion — used for learning comparison |
| `edited` | boolean | <span className="param-opt">optional</span> | Whether the suggestion was modified (default: false) |

## Response

```json
{ "sent": true, "to_email": "john@acme.com", "learned": true, "sent_at": "2026-03-21T10:00:00Z" }
```

:::danger
Returns `409 already_sent` if this reply was already sent. Returns `502 smartlead_error` if the Smartlead API fails.
:::
