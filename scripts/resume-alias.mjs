// The resume lives once, as public/Nikky Amresh - Sr. SDE.pdf. After the build,
// copy it to /resume.pdf too, so the short link always serves the same file.
import { copyFileSync } from 'node:fs';
copyFileSync('dist/Nikky Amresh - Sr. SDE.pdf', 'dist/resume.pdf');
console.log('resume alias: dist/resume.pdf -> Nikky Amresh - Sr. SDE.pdf');
