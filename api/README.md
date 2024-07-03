# nokia_0024

# Mise en place Devops, résumé de mes actions:

sudo dockerd to launch Docker if you didn't setup automatic launch in WSL

# docker build -f docker/Dockerfile.dev -t api .

# docker run -dp 8080:8080 api

https://www.youtube.com/watch?v=FTNKDgN4CGI

need to install aws cli : sudo apt install awscli
Create AWS-CLI user

# Then "aws configure" in WSL with the API key and the secret

# docker build -t docker/Dockerfile.dev -t api .

# docker tag api:latest 891377270838.dkr.ecr.us-east-1.amazonaws.com/nokia0024_back:latest

-> Login to aws-cli (your credentials are already saved in console if you've configured them):

# aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 891377270838.dkr.ecr.us-east-1.amazonaws.com

# docker push 891377270838.dkr.ecr.us-east-1.amazonaws.com/nokia0024_back:latest
