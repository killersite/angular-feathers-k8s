# Docker

## Build
docker build -t gcr.io/angular-feathers-test/angular-app:0.0.1 .
docker build -t gcr.io/angular-feathers-test/feathers-app:0.0.1 .
make build

## Run
docker run -p 8000:8000 gcr.io/blinding-inferno-2149/node-test:0.0.1

docker container kill <container id>

## Push image up to GCloud Registry
gcloud docker -- push us.gcr.io/angular-feathers-test/angular-app:0.0.1
gcloud docker -- push us.gcr.io/angular-feathers-test/feathers-app:0.0.1

# GCloud Kubernetes Cluster

## Authenticate with gcloud (default ???)
gcloud auth application-default login

## set the Project you working with
gcloud config set project angular-feathers-test

## create a cluster
gcloud container clusters create angular-feathers-cluster

## Set as cluster to use (only if you made cluster in web-console)
gcloud config set container/cluster angular-feathers-cluster

## Use cluster (only if you made cluster in web-console)
gcloud container clusters get-credentials angular-feathers-cluster --project angular-feathers-test

## Connect and Proxy the Cluster
kubectl proxy

## Deploy
kubectl create -f ./k8s/deployment.yml

## List deployments
kubectl get deployments

## List Pods in a deployemnt
kubectl get pods

## List ingress setup
kubectl get ing

## Show Ingress setup json
kubectl get ingress -o json

## List Google Compute backend services
gcloud compute backend-services list

## Delete Cluster
gcloud container clusters delete angular-feathers-cluster

## Describe an Ingress
kubectl describe ingress angular-ingress

## show setup
kubectl get ing,services,deploy,pods,ep

# Services

## Run the services
kubectl create -f ./k8s/service.yml

## List Services
kubectl get services

# Notes

## To add data from the command line
http POST http://35.227.234.248/api/v1/todo title=works?

# Minikube

## start
minikube start --vm-driver=xhyve

## set the context
kubectl config use-context minikube

## set minikube to use your host docker context
eval $(minikube docker-env)

## remove local docker context
eval $(minikube docker-env -u)

## automatically opens up a browser window using a local IP address
minikube service <service-name>

## show logs
kubectl logs <pod-name>

