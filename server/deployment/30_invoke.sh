#!/bin/bash
. deployment/my.config

aws lambda invoke \
--function-name $functionName \
--payload '{ "color": "A", "power": "A2" }' \
    response.json
# print
cat response.json