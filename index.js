import { Octokit } from "@octokit/core";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: "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",
});

const response = await octokit.request(
  "GET /repos/{owner}/{repo}/releases/latest",
  {
    owner: "killthekitten",
    repo: "https://github.com/getPopsure/app",
  }
);

console.log(response);
