#!/bin/bash

# user sign-up curl script
# API reference: https://github.com/ga-wdi-boston/library-api-guide

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "heather@heatheradels.com",
      "password": "bunnymuffin",
      "password_confirmation": "bunnymuffin"
    }
  }'
echo

# creates user object and returns it
# This curl script runs in node and creates a user object
