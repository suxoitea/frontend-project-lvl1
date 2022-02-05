install:
	npm ci

brain-games:
	node bin/brain-games.js


publish:
	npm publish --dry-run

link:
	sudo npm link

lint:
	npx eslint .

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progressin:
	node bin/brain-progression.js