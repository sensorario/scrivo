up:
	docker compose up -d

bash:
	docker exec -it node bash

stop:
	docker compose stop

rm:
	docker compose rm --force

rebuild: stop rm up