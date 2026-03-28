---
sidebar_position: 6
---

# Signature Verification

Every webhook request includes `X-SalesLobe-Signature: sha256=<hmac>`. Verify it with your webhook secret to confirm the request is genuine.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="nodejs" label="Node.js" default>

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import hmac, hashlib, json

def verify_webhook(payload: dict, signature: str, secret: str) -> bool:
    expected = 'sha256=' + hmac.new(
        secret.encode(), json.dumps(payload).encode(), hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected)
```

  </TabItem>
</Tabs>
