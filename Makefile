install: # The first cloning of the project
	nmp ci

lint: # Launching the linter
	npx eslint .

publish: # Updating packages
	npm publish

fix: # Massive Fix
	npx eslint . --fix

gendiff: # Calling the utility
	node bin/gendiff.js