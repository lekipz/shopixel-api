#!/bin/bash

set -ev

SERVICE_NAME=$1

# Configuring Serverless and AWS access
serverless config credentials -p aws -k "$AWS_ACCESS_KEY" -s "$AWS_SECRET_KEY"
export SERVERLESS_ACCESS_KEY="$SERVERLESS_SECRET_KEY"

# Deploying service
cd services/
cd "$SERVICE_NAME" || exit 1
serverless deploy
