#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, gameCommonDivisor } from '../src/games/gcd.js';

runGameProcess(rules, gameCommonDivisor);
