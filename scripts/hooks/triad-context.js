#!/usr/bin/env node
// MASH-mighty: inject the Triad reminder at session start and on every prompt.
// Disable with environment variable MASH_MIGHTY=off
if ((process.env.MASH_MIGHTY || '').toLowerCase() === 'off') process.exit(0);
process.stdout.write(
  'MASH-mighty active. Run the Triad on this prompt: ' +
  '1) MASHWOOD output first (default BARE, every fact kept). ' +
  '2) FORGE: pick the matching playbook or mash-mighty skill. ' +
  '3) SELECT: compare with every available skill, plugin and tool; best one wins. ' +
  'First reply line: Triad trace. No em dashes or en dashes.\n'
);
process.exit(0);
