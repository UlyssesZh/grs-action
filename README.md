# grs-action

A GitHub Action to generate
[GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats).

Example usage:

```yaml
- name: Generate Stats
  uses: UlyssesZh/grs-action@v0
  with:
    card: stats
    options: username=${{ github.repository_owner }}
    path: grs/stats.svg
  env:
    PAT_1: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

- `card`: The type of card to generate. Can be `stats` (default), `repo`, `langs`, `wakatime`, or `gist`.
- `options`: The options to pass to the card. For example, `username=UlyssesZh`.
- `path`: The path to save the generated card to. Defaults to `grs/${card}.svg`.

Environment variables:

- `PAT_1`: GitHub token, required.
- `FETCH_MULTI_PAGE_STARS`: experimental multi-page fetching.
