# nokia_0024

*Mise en place Devops, résumé de mes actions:
sudo dockerd to launch Docker if you didn't setup automatic launch in WSL
docker build -f docker/Dockerfile.dev -t api .
docker run -dp 3000:3000 api

https://www.youtube.com/watch?v=FTNKDgN4CGI
need to install aws cli : sudo apt install awscli
Create AWS-CLI user
Then "aws configure" in WSL with the API key and the secret
docker build -t docker/Dockerfile.dev -t api .
docker tag api:latest 891377270838.dkr.ecr.us-east-1.amazonaws.com/nokia0024_back:latest
docker push 891377270838.dkr.ecr.us-east-1.amazonaws.com/nokia0024_back:latest

