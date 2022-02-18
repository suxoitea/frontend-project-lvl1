#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, generateGameProgressin } from '../src/games/progression.js';

runGameProcess(rules, generateGameProgressin);
