---
sidebar_position: 5
---

# Partner API

Embed Corty's AI directly into your own product. Your users see your interface — Corty works on the backend.

Contact `partners@saleslobe.com` for a `sl_partner_` key with scoped access (typically `suggest` only), higher rate limits, and an isolated workspace so Corty learns from your specific use case over time.

```javascript
// When a user receives a reply, call SalesLobe for an AI suggestion
async function getCortySuggestion(lead, replyText) {
  const res = await fetch('https://<base>/v1/suggest', {
    method: 'POST',
    headers: { 'X-SalesLobe-Key': 'sl_partner_xxxxxxxx', 'Content-Type': 'application/json' },
    body: JSON.stringify({ lead_email: lead.email, lead_name: lead.firstName,
                           company: lead.company, reply_received: replyText })
  });
  const { suggestion } = await res.json();
  return suggestion;
}

// Always send feedback so Corty learns from your use case
async function sendFeedback(original, edited) {
  await fetch('https://<base>/v1/suggest/feedback', {
    method: 'POST',
    headers: { 'X-SalesLobe-Key': 'sl_partner_xxxxxxxx', 'Content-Type': 'application/json' },
    body: JSON.stringify({ accepted: true, original_suggestion: original, edited_version: edited })
  });
}
```
