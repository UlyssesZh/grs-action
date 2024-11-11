# grs-action

A GitHub Action to generate
[GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats).

Example usage:

```yaml
- name: Generate Stats
  uses: UlyssesZh/grs-action@v0
  with:
    card: stats
    options: username=${{ github.repository_owner }}&hide_border=true
    path: grs/stats.svg
```

For an example of the generated card, see
[here](https://github.com/UlyssesZh/grs-action/blob/gh-action-output/stats-ubuntu-latest.svg).

For a more complicated example, see
[my own profile](https://github.com/ulysseszh/ulysseszh/blob/master/.github/workflows/grs.yml).

## Inputs

- `card`: The type of card to generate.
  Can be `stats` (default), `repo`, `langs`, `wakatime`, or `gist`.
- `options`: The options to pass to the card. For example, `username=UlyssesZh&hide_border=true`.
  Defaults to `username=${{github.repository_owner}}`.
- `path`: The path to save the generated card to.
  Defaults to `grs/out.svg`.
- `token`: The GitHub token to use for fetching data. Normally no need to set this.

Environment variables:

- `FETCH_MULTI_PAGE_STARS`: experimental multi-page fetching.
