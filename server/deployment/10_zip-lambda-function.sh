#!/bin/bash
. deployment/my.config

7z a ./releases/$functionName.zip ./functions/$functionName.js