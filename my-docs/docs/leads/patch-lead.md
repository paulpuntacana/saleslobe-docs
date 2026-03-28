---
sidebar_position: 3
---

# PATCH /v1/leads/:id

<div className="endpoint-header">
  <span className="method-pill method-patch">PATCH</span>
  <code>/v1/leads/:id</code>
</div>

<span className="tag tag-scope">scope: leads.write</span>
<span className="tag tag-free">0 credits</span>

Update a lead's classification from an external system. Triggers a `lead.updated` webhook event.

The `:id` is a reply UUID — classification updates apply to all replies from this email in the same campaign.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="request" label="Request" default>

```json
{ "classification": "hot", "notes": "Spoke on phone, very interested in Q2 deal" }
```

  </TabItem>
  <TabItem value="response" label="Response 200">

```json
{ "updated": true, "email": "john@acme.com", "classification": "hot", "updated_at": "2026-03-21T10:00:00Z" }
```

  </TabItem>
</Tabs>
