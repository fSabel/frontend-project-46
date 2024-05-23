install: # The first cloning of the project
	nmp ci

lint: # Launching the linter
	npm eslint .

publish: # Updating packages
	npm publish

