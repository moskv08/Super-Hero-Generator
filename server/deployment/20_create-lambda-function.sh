#!/bin/bash
. deployment/my.config

# Delete function
aws lambda delete-function \
--function-name $functionName

#  Create function
aws lambda create-function \
--function-name $functionName \
--runtime nodejs10.x \
--role arn:$ARN \
--handler $functionName.handler \
--zip-file fileb://./releases/$functionName.zip