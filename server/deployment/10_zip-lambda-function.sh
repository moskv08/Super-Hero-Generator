#!/bin/bash
. deployment/my.config

7z a ./packages/$functionName.zip ./functions/$functionName.js