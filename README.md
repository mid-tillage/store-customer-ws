# store-customer-ws

## Description

Customer example Web Service using [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

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
docker build -t store-customer-ws:latest -f Dockerfile .
docker run -p 3020:3020 -p 27017:27017 -e NODE_ENV=production -e MONGODB_CONNECTION_STRING="mongodb://host.docker.internal:27017/mydb" store-customer-ws
```

### Metrics
| REPOSITORY           | TAG    | IMAGE ID      | CREATED      | SIZE  |
|----------------------|--------|---------------|--------------|-------|
| store-customer-ws    | latest | bd8ccd6265f0  | 2 hours ago  | 169MB |


## Kubernetes
```bash
minikube start
docker build -t store-customer-ws:latest -f Dockerfile .
kubectl apply -f kubernetes/pod.yaml
kubectl port-forward store-customer-ws-pod 8080:3020
```

### Metrics
```bash
minikube addons enable metrics-server
kubectl top pods # If you just enabled the metrics-server addon remember to wait a couple seconds!
```

| NAME                   | CPU(cores) | MEMORY(bytes) |
|------------------------|------------|---------------|
| store-customer-ws-pod  | 1m         | 51Mi          |
