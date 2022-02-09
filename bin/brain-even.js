#!/usr/bin/env node
import runGameProcess from '../src/index.js';
import { rules, gameEven } from '../src/games/even.js';

runGameProcess(rules, gameEven);
