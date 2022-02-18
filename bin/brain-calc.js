#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, generateGameCalc } from '../src/games/calc.js';

runGameProcess(rules, generateGameCalc);
