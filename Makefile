build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

up-prod:
	docker-compose -f docker-compose.yml docker-compose.prod.yml up -d