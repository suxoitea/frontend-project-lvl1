#!/usr/bin/env node
import executeGame from '../src/index.js';
import { rules, gameProgressin } from '../src/games/progression.js';

executeGame(rules, gameProgressin);
