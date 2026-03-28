---
sidebar_position: 4
---

# Make.com Setup Guide

Connect SalesLobe to any tool via Make in minutes — no code required.

:::tip
Most Make setups take under 10 minutes. Once connected, push hot leads to HubSpot, Slack, Airtable, Notion or any of Make's 1,000+ integrations.
:::

<div className="steps">
  <div className="step">
    <div className="step-num">1</div>
    <div className="step-body">
      <div className="step-title">Create a scenario in Make</div>
      <div className="step-text">Go to make.com and create a new Scenario. Add Webhooks → Custom Webhook as the trigger module.</div>
    </div>
  </div>
  <div className="step">
    <div className="step-num">2</div>
    <div className="step-body">
      <div className="step-title">Copy your Make webhook URL</div>
      <div className="step-text">Make gives you a URL like <code>https://hook.make.com/abc123</code>. Copy it.</div>
    </div>
  </div>
  <div className="step">
    <div className="step-num">3</div>
    <div className="step-body">
      <div className="step-title">Register in SalesLobe</div>
      <div className="step-text">Go to Settings → Connections → Webhooks → Add Webhook. Paste the URL and select your events.</div>
    </div>
  </div>
  <div className="step">
    <div className="step-num">4</div>
    <div className="step-body">
      <div className="step-title">Send a test event</div>
      <div className="step-text">Click Test in SalesLobe. Make receives the payload and shows you the data structure to map.</div>
    </div>
  </div>
  <div className="step">
    <div className="step-num">5</div>
    <div className="step-body">
      <div className="step-title">Add your actions</div>
      <div className="step-text">Connect Airtable, HubSpot, Slack, or Google Sheets. Map the fields from SalesLobe's payload to your destination.</div>
    </div>
  </div>
</div>
