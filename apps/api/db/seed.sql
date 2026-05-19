insert into users (id, email, role)
values
  ('00000000-0000-0000-0000-000000000001', 'ops@nest.ai', 'ops_admin'),
  ('00000000-0000-0000-0000-000000000002', 'analyst@nest.ai', 'analyst')
on conflict (email) do nothing;

insert into wallet_entities (id, address, label, category, conviction)
values
  ('10000000-0000-0000-0000-000000000001', '0x9c9a4a45b0f6b9c4d6e54c8ddf8457085e8f4a11', 'Sticky Yield Cohort 01', 'smart-lp', 92),
  ('10000000-0000-0000-0000-000000000002', '0x5cb912f87af0f4607d3fa10a1d7d00f7d8b96cc2', 'Treasury Pattern Wallet', 'treasury', 76)
on conflict (address) do nothing;

insert into rotation_signals (
  id,
  headline,
  summary,
  confidence,
  severity,
  source_protocol,
  destination_protocol,
  source_asset,
  destination_asset,
  evidence_hash
)
values
  (
    '20000000-0000-0000-0000-000000000001',
    'New user plan routes a travel fund into a conservative Mantle savings basket',
    'Nest created a plain-English travel-fund plan with a simple stable and yield mix that keeps the onboarding path beginner-friendly.',
    87,
    'high',
    'Merchant Moe',
    'Merchant Moe',
    'mETH',
    'cmETH',
    '0xaaa111'
  ),
  (
    '20000000-0000-0000-0000-000000000002',
    'Milestone prompt suggests topping up an emergency goal vault',
    'A user reached a progress checkpoint and Nest prepared a follow-up funding suggestion instead of a risky rebalance.',
    81,
    'medium',
    'Agni Finance',
    'Ondo route',
    'USDe',
    'USDY',
    '0xbbb222'
  )
on conflict (id) do nothing;

insert into signal_evidence (id, signal_id, evidence_type, title, body)
values
  (
    '30000000-0000-0000-0000-000000000001',
    '20000000-0000-0000-0000-000000000001',
    'wallet-cluster',
    '5-wallet LP cohort overlap',
    'Five correlated LP addresses exited mETH/MNT within 14 minutes and rebuilt into cmETH/USDe with similar range width.'
  ),
  (
    '30000000-0000-0000-0000-000000000002',
    '20000000-0000-0000-0000-000000000001',
    'yield-shift',
    'Defensive yield repositioning',
    'The cohort reduced directional MNT beta while preserving yield exposure through cmETH and stable routing.'
  ),
  (
    '30000000-0000-0000-0000-000000000003',
    '20000000-0000-0000-0000-000000000002',
    'treasury-pattern',
    'Low-turnover wallet behavior',
    'Observed addresses historically rotate capital only during mandate or yield-thesis changes and maintain longer holding periods.'
  )
on conflict (id) do nothing;

insert into starter_workflows (id, title, summary, cta, thesis, signal_id)
values
  (
    '50000000-0000-0000-0000-000000000001',
    'Load the travel fund plan',
    'Open a beginner-friendly Nest plan that routes a travel goal into a conservative Mantle savings basket.',
    'Build this plan',
    'Nest starts with a simple goal: protect the travel fund while still earning yield. The plan stays readable, liquid, and easy to explain to a first-time on-chain user.',
    '20000000-0000-0000-0000-000000000001'
  ),
  (
    '50000000-0000-0000-0000-000000000002',
    'Open the emergency vault milestone',
    'Use a seeded milestone journey that suggests topping up an emergency reserve instead of forcing a risky rebalance.',
    'Use this milestone',
    'The milestone system guides the user toward safety first. Instead of adding complexity, Nest turns progress into a clear next contribution toward a more resilient emergency reserve.',
    '20000000-0000-0000-0000-000000000002'
  )
on conflict (id) do nothing;

insert into alert_rules (id, user_id, channel, condition, is_enabled)
values
  (
    '60000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000002',
    'email',
    'Send a milestone note when the goal vault reaches 60% of its target.',
    true
  ),
  (
    '60000000-0000-0000-0000-000000000002',
    '00000000-0000-0000-0000-000000000002',
    'telegram',
    'Alert when a follow-up funding prompt is ready for the active plan.',
    true
  )
on conflict (id) do nothing;

insert into audit_logs (id, actor_email, action, target_type, target_id, reason)
values
  (
    '40000000-0000-0000-0000-000000000001',
    'ops@nest.ai',
    'seeded_dataset',
    'system',
    'nest',
    'Initial reference implementation bootstrap'
  )
on conflict (id) do nothing;
