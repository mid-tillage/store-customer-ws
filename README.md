# store-customer-ws

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Test](#test)
- [Docker](#docker)
  - [Image Resource Usage Metrics](#image-resource-usage-metrics)
- [Kubernetes](#kubernetes)
  - [Pod Resource Usage Metrics](#pod-resource-usage-metrics)

## Description

Store's Customer Web Service example using [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app
The following commands allow you to run the application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

```bash
# Build Docker image
docker build -t store-customer-ws:latest -f Dockerfile .

# Run Docker container (with example port mappings and environment variables)
docker run -p 3020:3020 -p 27017:27017 -e NODE_ENV=production -e MONGODB_CONNECTION_STRING="mongodb://host.docker.internal:27017/mydb" store-customer-ws
```

### Image resource usage metrics

The table below shows resource usage metrics for the `store-customer-ws` Docker container.

| REPOSITORY           | TAG    | IMAGE ID      | CREATED      | SIZE  |
|----------------------|--------|---------------|--------------|-------|
| store-customer-ws    | latest | bd8ccd6265f0  | 2 hours ago  | 169MB |


## Kubernetes

```bash
# Start Minikube to create a local Kubernetes cluster
minikube start

# Configure the shell to use Minikube's Docker daemon
& minikube -p minikube docker-env --shell powershell | Invoke-Expression

# Build Docker image with a specific tag and Dockerfile
docker build -t store-customer-ws:latest -f Dockerfile .

# Apply Kubernetes configuration to create a pod
kubectl apply -f kubernetes/pod.yaml

# Port-forward to access the Kubernetes pod locally
kubectl port-forward store-customer-ws-pod 8080:3020
```

### Pod resource usage metrics

The table below shows resource usage metrics for the `store-customer-ws-pod` pod.

```bash
minikube addons enable metrics-server
kubectl top pods
```

**Note:** If you just enabled the metrics-server addon, remember to wait a couple of seconds before running the `kubectl top pods` command.


| NAME                   | CPU(cores) | MEMORY(bytes) |
|------------------------|------------|---------------|
| store-customer-ws-pod  | 1m         | 51Mi          |
