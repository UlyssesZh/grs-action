import { default as stats } from 'github-readme-stats/api/index.js';
import { default as repo } from 'github-readme-stats/api/pin.js';
import { default as langs } from 'github-readme-stats/api/top-langs.js';
import { default as wakatime } from 'github-readme-stats/api/wakatime.js';
import { default as gist } from 'github-readme-stats/api/gist.js';
import queryString from 'query-string';

const api = { stats, repo, langs, wakatime, gist };
const exported = {};
for (const card in api) {
	exported[card] = async query => await api[card](
		{ query: queryString.parse(query) },
		{ setHeader: () => {}, send: t => t }
	);
}
export default exported;
