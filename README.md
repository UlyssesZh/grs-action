# grs-action

> [!WARNING]
> This action has been deprecated in favor of
> [stats-organization/github-readme-stats-action](https://github.com/stats-organization/github-readme-stats-action).

A GitHub Action to generate
[GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats).

> [!NOTE]
> There is a breaking change starting from v0.3.0 due to an upstream change in GRS.
> The changes include:
>
> - The `langs` card is now renamed to `top-langs`.
> - The `light` theme is now renamed to `default`.
>
> All workflows using the `v0` tag or the `master` branch are affected.

Example usage:

```yaml
- name: Generate Stats
  uses: UlyssesZh/grs-action@v0
  with:
    card: stats
    options: username=${{ github.repository_owner }}&hide_border=true
    path: grs/stats.svg
```

For an example of the generated card, see the
[`gh-action-output`](https://github.com/UlyssesZh/grs-action/blob/gh-action-output/stats-ubuntu-latest.svg)
branch.

For a more complicated example, see
[my own profile](https://github.com/UlyssesZh/UlyssesZh/blob/b483bc316738fb5ec3e44849599dad70ab290a18/.github/workflows/grs.yml).

## Inputs

- `card`: The type of card to generate.
  Can be `stats` (default), `repo`, `top-langs`, `wakatime`, or `gist`.
- `options`: The options to pass to the card. For example, `username=UlyssesZh&hide_border=true`.
  Defaults to `username=${{github.repository_owner}}`.
- `path`: The path to save the generated card to.
  Defaults to `grs/out.svg`.
- `token`: The GitHub token to use for fetching data. Normally no need to set this.

Environment variables:

- `FETCH_MULTI_PAGE_STARS`: experimental multi-page fetching.
