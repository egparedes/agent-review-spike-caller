# PR Agent in this repository

This test repository calls the reusable PR Agent workflow of
`GridTools/ci-workflows` from `.github/workflows/pr-agent.yml`, pinned by
commit SHA. The review policy is `.pr_agent.toml` on `main`.

- A review runs automatically when a writer opens, reopens or marks ready a
  non-draft pull request.
- Writers can comment PR Agent commands such as `/review`, `/improve` or
  `/ask "<question>"` on any pull request. Comments with `--section.key=value`
  setting arguments are refused.
- Runs from users without write access, bots and drafts are skipped with a
  notice in the run.

If a run fails, the workflow posts one failure comment that links here; a
later successful run removes it. Check the run's log first: the `authorize`
job names the workflow commit and the model chain, and the `pr-agent` job
shows `Applying repo settings (sections: [...])` when `.pr_agent.toml` was
applied.

Documentation of the workflow: `docs/pr-agent.md` in `GridTools/ci-workflows`.
