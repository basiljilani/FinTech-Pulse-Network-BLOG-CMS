#!/bin/bash

# Build and package the SAM application
sam build
sam package --output-template-file packaged.yaml --s3-bucket ${DEPLOYMENT_BUCKET}

# Deploy the application
sam deploy --template-file packaged.yaml \
          --stack-name fintech-pulse-network \
          --capabilities CAPABILITY_IAM \
          --parameter-overrides Environment=dev

# Get the outputs
aws cloudformation describe-stacks \
    --stack-name fintech-pulse-network \
    --query 'Stacks[0].Outputs' \
    --output table
