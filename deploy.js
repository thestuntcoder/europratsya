let date = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
  timeZone: 'Europe/Zurich',
});

const fs = require('fs');
fs.writeFileSync('DEPLOY.md', date);
