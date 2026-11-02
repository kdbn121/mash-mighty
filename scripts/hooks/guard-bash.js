#!/usr/bin/env node
// MASH-mighty: stop catastrophic shell commands, ask before risky ones. Fails open.
let raw = '';
process.stdin.on('data', d => (raw += d));
process.stdin.on('end', () => {
  try {
    const cmd = String((JSON.parse(raw).tool_input || {}).command || '');
    const deny = [
      [/\brm\s+(-[a-z]*r[a-z]*f|-[a-z]*f[a-z]*r)[a-z]*\s+(\/|~|\$HOME|\*)(\s|$)/i, 'recursive delete of root, home or everything'],
      [/\bmkfs(\.\w+)?\b/i, 'formatting a filesystem'],
      [/\bdd\b[^|]*\bof=\/dev\/(sd|nvme|hd|disk)/i, 'raw write to a disk device'],
      [/\bformat\s+[a-z]:/i, 'formatting a Windows drive'],
      [/Remove-Item\b.*-Recurse\b.*\b[A-Z]:\\\s*($|-)/i, 'recursive delete of a whole drive'],
      [/:\(\)\s*\{\s*:\|:&\s*\};:/, 'fork bomb'],
    ];
    const ask = [
      [/\bgit\s+push\b.*(--force|-f\b)/i, 'force push can overwrite shared history'],
      [/\bgit\s+reset\s+--hard\b/i, 'hard reset discards uncommitted work'],
      [/\bgit\s+clean\s+-[a-z]*f/i, 'git clean deletes untracked files'],
      [/\bdrop\s+(database|table|schema)\b/i, 'dropping database objects'],
      [/\btruncate\s+table\b/i, 'truncating a table'],
      [/\brm\s+-[a-z]*r/i, 'recursive delete'],
      [/\b(curl|wget)\b[^|]*\|\s*(sudo\s+)?(ba|z)?sh\b/i, 'piping a download into a shell'],
    ];
    for (const [re, why] of deny) if (re.test(cmd)) return out('deny', `MASH-mighty blocked: ${why}.`);
    for (const [re, why] of ask) if (re.test(cmd)) return out('ask', `MASH-mighty check: ${why}. Confirm this is intended.`);
  } catch (_) {}
  process.exit(0);
});
function out(decision, reason) {
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision: decision, permissionDecisionReason: reason } }));
  process.exit(0);
}
