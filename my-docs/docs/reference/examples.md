---
sidebar_position: 3
---

# Code Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="js" label="JavaScript" default>

```javascript
const KEY  = 'sl_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const BASE = 'https://slazbvfvliieskvkjtav.supabase.co/functions/v1/api-gateway';

async function suggest(replyText, leadName, context) {
  const res = await fetch(`${BASE}/v1/suggest`, {
    method: 'POST',
    headers: { 'X-SalesLobe-Key': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ reply_received: replyText, lead_name: leadName, campaign_context: context })
  });
  if (!res.ok) { const e = await res.json(); throw new Error(e.error.message); }
  return res.json();
}

async function sendReply(replyId, body, original) {
  const res = await fetch(`${BASE}/v1/replies/${replyId}/send`, {
    method: 'POST',
    headers: { 'X-SalesLobe-Key': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ body, original_suggestion: original, edited: true })
  });
  return res.json();
}

async function updateLead(replyId, classification) {
  const res = await fetch(`${BASE}/v1/leads/${replyId}`, {
    method: 'PATCH',
    headers: { 'X-SalesLobe-Key': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ classification })
  });
  return res.json();
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

KEY  = 'sl_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
BASE = 'https://slazbvfvliieskvkjtav.supabase.co/functions/v1/api-gateway'
H    = {'X-SalesLobe-Key': KEY, 'Content-Type': 'application/json'}

def suggest(reply, name='', context=''):
    r = requests.post(f'{BASE}/v1/suggest', headers=H,
                      json={'reply_received': reply, 'lead_name': name, 'campaign_context': context})
    r.raise_for_status(); return r.json()

def send_reply(reply_id, body, original=None):
    payload = {'body': body}
    if original: payload.update({'original_suggestion': original, 'edited': True})
    r = requests.post(f'{BASE}/v1/replies/{reply_id}/send', headers=H, json=payload)
    r.raise_for_status(); return r.json()

def update_lead(reply_id, classification):
    r = requests.patch(f'{BASE}/v1/leads/{reply_id}', headers=H,
                       json={'classification': classification})
    r.raise_for_status(); return r.json()
```

  </TabItem>
  <TabItem value="curl" label="curl">

```bash
BASE="https://slazbvfvliieskvkjtav.supabase.co/functions/v1/api-gateway"
KEY="sl_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# AI suggestion
curl -X POST "$BASE/v1/suggest" \
  -H "X-SalesLobe-Key: $KEY" -H "Content-Type: application/json" \
  -d '{"reply_received":"Tell me more","lead_name":"John"}'

# Hot leads
curl "$BASE/v1/leads?classification=hot&limit=20" -H "X-SalesLobe-Key: $KEY"

# Full thread
curl "$BASE/v1/replies/<uuid>" -H "X-SalesLobe-Key: $KEY"

# Send reply
curl -X POST "$BASE/v1/replies/<uuid>/send" \
  -H "X-SalesLobe-Key: $KEY" -H "Content-Type: application/json" \
  -d '{"body":"Hey John, thanks for your interest..."}'

# Update lead classification
curl -X PATCH "$BASE/v1/leads/<uuid>" \
  -H "X-SalesLobe-Key: $KEY" -H "Content-Type: application/json" \
  -d '{"classification":"hot"}'

# Register webhook
curl -X POST "$BASE/v1/webhooks" \
  -H "X-SalesLobe-Key: $KEY" -H "Content-Type: application/json" \
  -d '{"name":"Make.com","url":"https://hook.make.com/xyz","events":["lead.replied"]}'
```

  </TabItem>
</Tabs>
