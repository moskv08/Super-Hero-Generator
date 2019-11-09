#!/bin/bash
. deployment/my.config

aws lambda invoke \
--function-name $functionName \
--payload '{ "color": "A", "power": "A" }' \
    response.json
# print
cat response.json