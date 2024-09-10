
Start Docker Desktop and make sure that Docker Desktop and Kubernetes is running.

https://github.com/localstack/localstack

brew install localstack/tap/localstack-cli

# LocalStack status
localstack status

# Start LocalStack
localstack start -d

# Stop LocalStack
localstack stop

# Restart LocalStack
localstack restart

# List Lambdas
awslocal lambda list-functions

https://docs.localstack.cloud/user-guide/aws/lambda/

brew install awscli-local

zip function.zip index.js

awslocal lambda create-function \
    --function-name localstack-lambda-url-example \
    --runtime nodejs18.x \
    --zip-file fileb://function.zip \
    --handler index.handler \
    --role arn:aws:iam::000000000000:role/lambda-role

```
awslocal lambda invoke --function-name localstack-lambda-url-example \
    --cli-binary-format raw-in-base64-out \
    --payload '{"body": "{\"num1\": \"10\", \"num2\": \"10\"}" }' output.txt
```
