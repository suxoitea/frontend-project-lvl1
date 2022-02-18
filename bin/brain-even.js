#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, generateGameEven } from '../src/games/even.js';

runGameProcess(rules, generateGameEven);
