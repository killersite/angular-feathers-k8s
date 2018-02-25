# Docker

## Build
docker build -t gcr.io/blinding-inferno-2149/node-test:0.0.1 .

## Run
docker run -p 8000:8000 gcr.io/blinding-inferno-2149/node-test:0.0.1

docker container kill <container id>

## Push image up to GCloud Registry
gcloud docker -- push us.gcr.io/angular-feathers-test/angular-app:0.0.1

# GCloud Kubernetes Cluster

## Authenticate with gcloud (default ???)
gcloud auth application-default login

## set the Project you working with
gcloud config set project angular-feathers-test

## create a cluster
gcloud container clusters create angular-feathers-cluster

## Set as cluster to use
gcloud config set container/cluster angular-feathers-cluster

## Use cluster
gcloud container clusters get-credentials angular-feathers-cluster --project angular-feathers-test

## Connect and Proxy the Cluster
kubectl proxy

## Deploy
kubectl create -f ./k8s/deployment.yml

## List deployments
kubectl get deployments

## List Pods in a deployemnt
kubectl get pods

## Delete Cluster
gcloud container clusters delete angular-feathers-cluster

# Services

## Run the services
kubectl create -f ./k8s/service.yml

## List Services
kubectl get services