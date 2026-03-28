import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        { type: 'doc', id: 'getting-started/overview',       label: 'Overview' },
        { type: 'doc', id: 'getting-started/authentication', label: 'Authentication' },
        { type: 'doc', id: 'getting-started/rate-limits',    label: 'Rate Limits' },
        { type: 'doc', id: 'getting-started/quickstart',     label: 'Quickstart' },
      ],
    },
    {
      type: 'category',
      label: 'AI',
      collapsed: true,
      items: [
        { type: 'doc', id: 'ai/suggest',  label: 'POST /suggest' },
        { type: 'doc', id: 'ai/feedback', label: 'POST /suggest/feedback' },
      ],
    },
    {
      type: 'category',
      label: 'Leads & Replies',
      collapsed: true,
      items: [
        { type: 'doc', id: 'leads/get-leads',   label: 'GET /leads' },
        { type: 'doc', id: 'leads/post-leads',  label: 'POST /leads' },
        { type: 'doc', id: 'leads/patch-lead',  label: 'PATCH /leads/:id' },
        { type: 'doc', id: 'leads/get-reply',   label: 'GET /replies/:id' },
        { type: 'doc', id: 'leads/send-reply',  label: 'POST /replies/:id/send' },
      ],
    },
    {
      type: 'category',
      label: 'Campaigns & Reports',
      collapsed: true,
      items: [
        { type: 'doc', id: 'campaigns/campaigns',    label: 'GET /campaigns' },
        { type: 'doc', id: 'campaigns/reports-list', label: 'GET /reports' },
        { type: 'doc', id: 'campaigns/reports-get',  label: 'GET /reports/:id' },
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      collapsed: true,
      items: [
        { type: 'doc', id: 'webhooks/create', label: 'POST /webhooks' },
        { type: 'doc', id: 'webhooks/list',   label: 'GET /webhooks' },
        { type: 'doc', id: 'webhooks/delete', label: 'DELETE /webhooks/:id' },
      ],
    },
    {
      type: 'category',
      label: 'Webhook Reference',
      collapsed: true,
      items: [
        { type: 'doc', id: 'webhooks/event-types', label: 'Event Types' },
        { type: 'doc', id: 'webhooks/payloads',    label: 'Event Payloads' },
        { type: 'doc', id: 'webhooks/signatures',  label: 'Signatures' },
        { type: 'doc', id: 'webhooks/retry',       label: 'Retry Policy' },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        { type: 'doc', id: 'reference/errors',   label: 'Error Codes' },
        { type: 'doc', id: 'reference/credits',  label: 'Credits & Billing' },
        { type: 'doc', id: 'reference/examples', label: 'Code Examples' },
        { type: 'doc', id: 'reference/make',     label: 'Make.com Guide' },
        { type: 'doc', id: 'reference/partner',  label: 'Partner API' },
      ],
    },
  ],
};

export default sidebars;
