const core = require('@actions/core');
const github = require('@actions/github');
const { spawn } = require("child_process");

try {
  console.log(`Hello from NodeJS!`);
  const denoProcess = spawn("deno", ["run", "https://raw.githubusercontent.com/Jamalam360/test-action/main/deno_test/test.ts"]);

  denoProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  denoProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  denoProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
} catch (error) {
  core.setFailed(error.message);
}