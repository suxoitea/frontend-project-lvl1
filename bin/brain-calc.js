#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, gameCalc } from '../src/games/calc.js';

runGameProcess(rules, gameCalc);
