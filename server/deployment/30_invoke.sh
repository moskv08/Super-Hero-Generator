#!/bin/bash
. deployment/my.config

aws lambda invoke \
--function-name $functionName \
--payload '{ "queryStringParameters": {
        "color": "F",
        "power": "Z"
    } }' \
    response.json
# print
cat response.json