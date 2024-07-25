@echo off

@echo Started: %date% %time%

REM Build the Docker image
docker build -t my-angular-app .

REM Log in to Docker Hub
docker login -u dongtrieuit@gmail.com -p 147147Aa!@#

REM Tag the Docker image
docker tag my-angular-app dongtrieuit/my-angular-app:latest

REM Push the Docker image to Docker Hub
docker push dongtrieuit/my-angular-app:latest

@echo Completed: %date% %time%