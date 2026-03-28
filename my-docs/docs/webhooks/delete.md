---
sidebar_position: 3
---

import ApiPlayground from '@site/src/components/ApiPlayground';

# DELETE /v1/webhooks/:id

<div className="endpoint-header">
  <span className="method-pill method-delete">DEL</span>
  <code>/v1/webhooks/:id</code>
</div>

<span className="tag tag-scope">scope: webhooks.manage</span>
<span className="tag tag-free">0 credits</span>

Remove a webhook permanently.

## Try it

<ApiPlayground
  method="DELETE"
  endpoint="/v1/webhooks/{id}"
  params={[
    { name: 'id', in: 'path', required: true, description: 'Webhook ID (wh-...)', example: 'wh-abc123' },
  ]}
/>

## Response

```json
{ "deleted": true }
```
