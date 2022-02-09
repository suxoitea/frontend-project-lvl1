#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, gameProgressin } from '../src/games/progression.js';

runGameProcess(rules, gameProgressin);
