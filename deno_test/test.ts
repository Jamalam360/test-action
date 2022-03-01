const coreString = Deno.args[0];
const githubString = Deno.args[1];
console.log(coreString);
console.log(githubString)
const core = JSON.parse(coreString);
const github = JSON.parse(githubString);

console.log(`Hello from Deno! ${github.context.sha}`);