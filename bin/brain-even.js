#!/usr/bin/env node
import executeGame from '../src/index.js';
import { rules, gameEven } from '../src/games/even.js';

executeGame(rules, gameEven);
