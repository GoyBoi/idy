const { exec } = require('child_process');

// Wait a moment for the server to fully start
setTimeout(() => {
  exec('npx axe http://localhost:3001', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
}, 5000);