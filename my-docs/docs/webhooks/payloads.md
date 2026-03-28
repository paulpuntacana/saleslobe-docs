---
sidebar_position: 5
---

# Event Payloads

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="lead-created" label="lead.created" default>

```json
{
  "event": "lead.created",
  "timestamp": "2026-03-21T10:00:00Z",
  "workspace_id": "org-abc123",
  "data": {
    "from_email": "john@acme.com",
    "from_name": "John Doe",
    "campaign_id": "uuid",
    "campaign_name": "Q1 SaaS Outreach",
    "first_seen_at": "2026-03-21T10:00:00Z"
  }
}
```

  </TabItem>
  <TabItem value="lead-replied" label="lead.replied">

```json
{
  "event": "lead.replied",
  "timestamp": "2026-03-20T14:30:00Z",
  "workspace_id": "org-abc123",
  "data": {
    "reply_id": "uuid",
    "from_email": "john@acme.com",
    "from_name": "John Doe",
    "campaign_id": "uuid",
    "campaign_name": "Q1 SaaS Outreach",
    "body": "Sounds interesting, can we schedule a call?",
    "classification": "hot"
  }
}
```

  </TabItem>
  <TabItem value="lead-updated" label="lead.updated">

```json
{
  "event": "lead.updated",
  "timestamp": "2026-03-21T10:00:00Z",
  "workspace_id": "org-abc123",
  "data": {
    "lead_id": "uuid",
    "email": "john@acme.com",
    "campaign_id": "uuid",
    "classification": "hot",
    "notes": "Spoke on phone, very interested"
  }
}
```

  </TabItem>
  <TabItem value="corty-suggested" label="corty.suggested">

```json
{
  "event": "corty.suggested",
  "timestamp": "2026-03-20T14:30:00Z",
  "workspace_id": "org-abc123",
  "data": {
    "reply_id": "uuid",
    "from_email": "john@acme.com",
    "campaign_id": "uuid",
    "suggestion": "Hey John, thanks for your interest...",
    "strategy": "Address pricing inquiry with value proposition",
    "confidence": 0.87
  }
}
```

  </TabItem>
  <TabItem value="report-generated" label="report.generated">

```json
{
  "event": "report.generated",
  "timestamp": "2026-03-21T17:00:00Z",
  "workspace_id": "org-abc123",
  "data": {
    "report_id": "uuid",
    "report_type": "friday",
    "title": "Friday Intelligence Brief — 21 mrt 2026",
    "executive_summary": "Corty improved 3 campaigns, caught 2 issues.",
    "period_start": "2026-03-17",
    "period_end": "2026-03-21"
  }
}
```

  </TabItem>
</Tabs>
