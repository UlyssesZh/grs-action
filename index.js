#!/usr/bin/env node

import { getInput, setFailed } from '@actions/core'
import githubReadmeStats from './api.js'
import { mkdirSync, writeFileSync } from 'fs'
import { dirname } from 'path'

const DEFAULT_DIR = 'grs';
const CARDS = ['stats', 'repo', 'langs', 'wakatime', 'gist'];

try {
	const grsOptions = getInput('options', { required: true });
	const card = getInput('card', { required: false }) ?? 'stats';
	const targetPath = getInput('path');

	mkdirSync(targetPath ? dirname(targetPath) : DEFAULT_DIR, { recursive: true });
	for (const cardType of CARDS) {
		if (card !== cardType) {
			continue;
		}
		console.log(process.env.PAT_1)
		githubReadmeStats[cardType](grsOptions).then(svg => {
			writeFileSync(targetPath ?? `${DEFAULT_DIR}/${cardType}.svg`, svg)
		});
		break;
	}
} catch (error) {
	setFailed(error.message);
}
