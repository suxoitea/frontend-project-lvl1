#!/usr/bin/env node
import executeGame from '../src/index.js';
import { rules, gamePrime } from '../src/games/prime.js';

executeGame(rules, gamePrime);
