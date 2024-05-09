up:
	docker compose up -d

node_shell:
	docker exec -it node bash

latex_shell:
	docker exec -it latex bash

stop:
	docker compose stop

rm:
	docker compose down
	docker compose rm --force

build:
	docker build -t latex-pdf ./docker/latex/

run: build
	docker run --rm -v .:/workdir latex-pdf 

rebuild: stop rm up
