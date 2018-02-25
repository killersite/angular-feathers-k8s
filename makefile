.SILENT:
help:
	echo
	echo "Hello-World Make commands"
	echo
	echo "  Commands: "
	echo
	echo "    help - show this message"
	echo "    run - Start this service, and all of its deps, locally (docker)"
	echo "    test - Run the unit tests"
	echo "    deps - Check for all dependencies"

build: clean
	docker-compose -f ./run.yml build

run: build
	docker-compose -f ./run.yml up

bash:
	docker-compose -f ./run.yml run --rm web bash

clean:
	docker-compose -f ./run.yml rm -f
	# docker-compose -f ./test.yml rm -f

deps:
	echo "  Dependencies: "
	echo
	echo "    * docker $(shell which docker > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * docker-compose $(shell which docker-compose > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * gcloud $(shell which gcloud > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * kubectl $(shell which kubectl > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo