#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, generateGamePrime } from '../src/games/prime.js';

runGameProcess(rules, generateGamePrime);
