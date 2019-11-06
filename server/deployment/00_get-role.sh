#!/bin/bash
. deployment/my.config

aws iam get-role \
 --role-name $functionName-role-4nzorsjp