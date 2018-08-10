#!/bin/bash

# build the docker image
docker build -t boilerplate-api/api .

# list all docker images
docker images

# run the docker image
docker run -p 8080:3000 -d boilerplate-api/api

# wait for app to start
sleep 5

# test
curl -i http://localhost:8080

# open in browser
open http://localhost:8080
