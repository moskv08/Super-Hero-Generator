#!/bin/bash
. deployment/my.config

7z a $functionName.zip ./functions/$functionName.js