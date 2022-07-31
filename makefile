OUT_DIR=dist/wotlk

$(OUT_DIR):
	task

ui_shared: 
	task ui_shared -- $(OUT_DIR)

.PHONY: clean
clean:
	task clean

.PHONY: host
host:
	task host -- $(OUT_DIR)

.PHONY: wasm
wasm:
	task wasm -- $(OUT_DIR)

# Builds the web server with the compiled client.
.PHONY: wowsimwotlk
wowsimwotlk:
	task devserver

.PHONY: devserver
devserver:
	task devserver

rundevserver:
	task rundevserver

.PHONY: test
test:
	task test

.PHONY: update-tests
update-tests:
	task update-tests

release: wowsimwotlk
	GOOS=windows GOARCH=amd64 go build -o wowsimwotlk-windows.exe -ldflags="-X 'main.Version=$(VERSION)'" ./sim/web/main.go
	GOOS=darwin GOARCH=amd64 go build -o wowsimwotlk-amd64-darwin -ldflags="-X 'main.Version=$(VERSION)'" ./sim/web/main.go
	GOOS=linux GOARCH=amd64 go build -o wowsimwotlk-amd64-linux   -ldflags="-X 'main.Version=$(VERSION)'" ./sim/web/main.go

.PHONY: items
items: sim/core/items/all_items.go sim/core/proto/api.pb.go

sim/core/items/all_items.go: generate_items/*.go $(call rwildcard,sim/core/proto,*.go)
	go run generate_items/*.go -outDir=sim/core/items
	gofmt -w ./sim/core/items

.PHONY: fmt
fmt: tsfmt
	gofmt -w ./sim
	gofmt -w ./generate_items

.PHONY: tsfmt
tsfmt:
	for dir in $$(find ./ui -maxdepth 1 -type d -not -path "./ui" -not -path "./ui/worker"); do \
		echo $$dir; \
		npx tsfmt -r --useTsfmt ./tsfmt.json --baseDir $$dir; \
	done

# one time setup to install pre-commit hook for gofmt and npm install needed packages
setup:
	cp pre-commit .git/hooks
	chmod +x .git/hooks/pre-commit
