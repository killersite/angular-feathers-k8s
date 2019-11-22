.SILENT:

TAG?=$(shell git rev-list HEAD --max-count=1 --abbrev-commit)
export TAG

help:
	echo
	echo "Hello-World Make commands"
	echo
	echo "  Commands: "
	echo
	echo "    help - show this message"
	echo "    start - Start this service, and all of its deps, locally (docker)"
	echo "    stop - Stop this service, and all of its deps, locally (docker)"
	echo "    test - Run the unit tests"
	echo "    deps - Check for all dependencies"

build: clean
	docker-compose -f ./run.yml build

start: build
	docker-compose -f ./run.yml up

stop:
	docker-compose -f ./run.yml down

bash:
	docker-compose -f ./run.yml run --rm nginx bash

clean:
	docker-compose -f ./run.yml rm -f
	# docker-compose -f ./test.yml rm -f

upload: build
	gcloud docker -- push us.gcr.io/angular-feathers-test/angular-app:0.0.1
	gcloud docker -- push us.gcr.io/angular-feathers-test/feathers-app:0.0.1

create-cluster:
	gcloud container clusters create angular-feathers-cluster
	gcloud config set container/cluster angular-feathers-cluster
	gcloud container clusters get-credentials angular-feathers-cluster --project angular-feathers-test

delete-cluster:
	gcloud container clusters delete angular-feathers-cluster

deploy:
	gcloud container clusters get-credentials angular-feathers-cluster --project angular-feathers-test
	kubectl apply -f ./k8s/deployment.yml
	# envsubst < k8s/deployment.yml | kubectl apply -f -

# ship: test pack upload deploy

deps:
	# add minikube
	echo "  Dependencies: "
	echo
	echo "    * docker $(shell which docker > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * docker-compose $(shell which docker-compose > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * gcloud $(shell which gcloud > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
  # http://somanymachines.com/fargate/
	echo "    * fargate cli $(shell which fargate > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * kubectl $(shell which kubectl > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo
