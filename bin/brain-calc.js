#!/usr/bin/env node
import executeGame from '../src/index.js';
import { rules, gameCalc } from '../src/games/calc.js';

executeGame(rules, gameCalc);
