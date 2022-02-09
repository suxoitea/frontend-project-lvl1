#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, gamePrime } from '../src/games/prime.js';

runGameProcess(rules, gamePrime);
