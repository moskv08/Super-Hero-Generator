#!/bin/bash
. deployment/my.config

aws lambda invoke \
--function-name $functionName \
--payload '{ "queryStringParameters": {
        "color": "A",
        "power": "B"
    } }' \
    response.json
# print
cat response.json