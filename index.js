#!/usr/bin/env node

import githubReadmeStats from './api.js'
import { mkdirSync, writeFileSync } from 'fs'
import { dirname } from 'path'

const grsOptions = process.env.GRS_OPTIONS;
const card = process.env.GRS_CARD;
const targetPath = process.env.GRS_PATH;
mkdirSync(targetPath ? dirname(targetPath) : DEFAULT_DIR, { recursive: true });
for (const cardType in githubReadmeStats) {
	if (card !== cardType) {
		continue;
	}
	console.log(process.env.PAT_1)
	githubReadmeStats[cardType](grsOptions).then(svg => {
		writeFileSync(targetPath, svg)
	});
	break;
}
