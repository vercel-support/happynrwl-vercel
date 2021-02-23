let app;

process.argv.forEach((val, index, array) => {
  if ( val.includes("app=") ) {
    const v = val.split("app=");
    app = v[1];
  }
});

const { execSync } = require('child_process');
const affectedApps = execSync(`npx nx affected:apps --base=main --plain`).toString();
console.log(`affected applications: ${affectedApps}`);

if (affectedApps.includes(app)) {
  console.log(`${app} was affected. Continuing with build.`)
  return 1;
} else {
  console.log(`${app} was not affected. Cancelling this build.`)
  return 0;
}