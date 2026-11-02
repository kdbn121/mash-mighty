#!/usr/bin/env node
// MASH-mighty: after a file write or edit, flag likely secrets so they move to env vars. Fails open.
const fs = require('fs');
let raw = '';
process.stdin.on('data', d => (raw += d));
process.stdin.on('end', () => {
  try {
    const input = JSON.parse(raw).tool_input || {};
    const file = input.file_path || input.path;
    if (!file || /\.env\.example$|\.md$/i.test(file) || !fs.existsSync(file)) process.exit(0);
    const text = fs.readFileSync(file, 'utf8');
    const rules = [
      [/AKIA[0-9A-Z]{16}/, 'AWS access key'],
      [/-----BEGIN (RSA |EC |OPENSSH |)PRIVATE KEY-----/, 'private key'],
      [/\bgh[pousr]_[A-Za-z0-9]{36,}\b/, 'GitHub token'],
      [/\bsk-[A-Za-z0-9_-]{20,}\b/, 'API secret key'],
      [/\bxox[abpr]-[A-Za-z0-9-]{10,}\b/, 'Slack token'],
      [/AIza[0-9A-Za-z_-]{35}/, 'Google API key'],
      [/(password|passwd|secret|api_?key|token)\s*[:=]\s*['"][^'"\s]{8,}['"]/i, 'hard-coded credential'],
    ];
    const lines = text.split(/\r?\n/);
    for (const [re, label] of rules) {
      const i = lines.findIndex(l => re.test(l));
      if (i >= 0) {
        process.stdout.write(JSON.stringify({ decision: 'block', reason: `MASH-mighty secret scan: possible ${label} in ${file} line ${i + 1}. Move it to an environment variable or secret store, then continue.` }));
        process.exit(0);
      }
    }
  } catch (_) {}
  process.exit(0);
});
