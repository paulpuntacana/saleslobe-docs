---
sidebar_position: 1
---

# POST /v1/webhooks

<div className="endpoint-header">
  <span className="method-pill method-post">POST</span>
  <code>/v1/webhooks</code>
</div>

<span className="tag tag-scope">scope: webhooks.manage</span>
<span className="tag tag-free">0 credits</span>

Register a webhook endpoint.

:::info
A HMAC secret is auto-generated (prefix `whsec_`). Maximum 10 webhooks per organization.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="request" label="Request" default>

```json
{
  "name":   "Make.com Lead Sync",
  "url":    "https://hook.make.com/abcdef123456",
  "events": ["lead.replied", "reply.sent", "corty.suggested"]
}
```

  </TabItem>
  <TabItem value="response" label="Response 201">

```json
{
  "webhook": {
    "id": "wh-abc123",
    "name": "Make.com Lead Sync",
    "events": ["lead.replied", "reply.sent"],
    "secret": "whsec_a1b2c3d4e5f6...",
    "is_active": true,
    "created_at": "2026-03-20T10:00:00Z"
  }
}
```

  </TabItem>
</Tabs>
