# Docker

## Build

```
docker build -t gcr.io/angular-feathers-test/angular-app:0.0.1 .
docker build -t gcr.io/angular-feathers-test/feathers-app:0.0.1 .
make build
```

## Run
```
docker run -p 8000:8000 gcr.io/blinding-inferno-2149/node-test:0.0.1
```

## Bash
```
docker exec -it <CONTAINER ID> bash
docker run --rm -it <IMAGE> /bin/bash
```

## Kill a container
```
docker container kill <container id>
```

## Push image up to GCloud Registry
```
gcloud docker -- push us.gcr.io/angular-feathers-test/angular-app:0.0.1
gcloud docker -- push us.gcr.io/angular-feathers-test/feathers-app:0.0.1
```

# GCloud Kubernetes Cluster

## Authenticate with gcloud (default ???)
```
gcloud auth application-default login
```

## set the Project you working with
```
gcloud config set project angular-feathers-test
```

## create a cluster
```
gcloud container clusters create angular-feathers-cluster
```

## Set as cluster to use (only if you made cluster in web-console)
```
gcloud config set container/cluster angular-feathers-cluster
```

## Use cluster (only if you made cluster in web-console)
```
gcloud container clusters get-credentials angular-feathers-cluster --project angular-feathers-test
```

## Connect and Proxy the Cluster
```
kubectl proxy
```

## Deploy
```
kubectl create -f ./k8s/deployment.yml
```

## List deployments
```
kubectl get deployments
```

## List Pods in a deployemnt
```
kubectl get pods
```

## List ingress setup
```
kubectl get ing
```

## Show Ingress setup json
This can show you all the defaults set
```
kubectl get ingress -o json
```

## List Google Compute backend services
```
gcloud compute backend-services list
```

## Delete Cluster
```
gcloud container clusters delete angular-feathers-cluster
```

## Describe an Ingress
```
kubectl describe ingress angular-ingress
```

## show setup
```
kubectl get ing,services,deploy,pods,ep
```

# Services

## Run the services
```
kubectl create -f ./k8s/service.yml
```

## List Services
```
kubectl get services
```

# Notes

## Use HTTPie 
To add data from the command line for easy testing
```
http POST http://35.227.234.248/api/v1/todo title=works?
```

# Minikube

## start
```
minikube start --vm-driver=xhyve
minikube start --vm-driver=xhyve --extra-config=apiserver.ServiceNodePortRange=1–50000
minikube start \
  --cpus=2 \
  --memory=4096 \
  --extra-config=apiserver.ServiceNodePortRange=1–50000
```

## set the context
```
kubectl config use-context minikube
```

## Set minikube to use host docker 
This needs to be set on each terminal you want to use
```
eval $(minikube docker-env)
```
Also set the `imagePullPolicy` to `Never`, otherwise Kubernetes will try to download the image
kubectl run hello-foo --image=foo:0.0.1 --image-pull-policy=Never
imagePullPolicy=Never

## remove local docker context
```
eval $(minikube docker-env -u)
```

## Show dashboard
minikube dashboard

## automatically opens up a browser window using a local IP address
```
minikube service <service-name>
```

## show logs
```
kubectl logs <pod-name>
```

## Heapster (dashboard) addon
```
minikube addons enable heapster
minikube addons open heapster
```

## Kubernetes Clean Up
```
kubectl delete service <service-name>
kubectl delete deployment <deployment-name>
```

## Stop minikube
```
minikube stop
```

## Get the Minikube IP
```
minikube ip
```

## Set DNS info into /etc/hosts
```
echo "$(minikube ip) <domain1> <domain2>" | sudo tee -a /etc/hosts
```

## Get a shell to the running Container
```
kubectl exec -it <pod-name> -- /bin/bash
```

## Turn off default HTTPS on ingress
```
  annotations:
    ingress.kubernetes.io/ssl-redirect: “false”
```
