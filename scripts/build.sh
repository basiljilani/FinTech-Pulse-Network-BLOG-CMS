#!/bin/bash

# Build the frontend
npm run build

# Copy the built files to S3
aws s3 sync dist/ s3://${WEBSITE_BUCKET_NAME} --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"
