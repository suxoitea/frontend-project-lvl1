#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, generateGameCommonDivisor } from '../src/games/gcd.js';

runGameProcess(rules, generateGameCommonDivisor);
