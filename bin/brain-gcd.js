#!/usr/bin/env node
import executeGame from '../src/index.js';
import { rules, gameCommonDivisor } from '../src/games/gcd.js';

executeGame(rules, gameCommonDivisor);
