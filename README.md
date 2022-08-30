# Microservices & Devops CI/CD 
![image](https://user-images.githubusercontent.com/46090098/187527804-1e0d1cba-6bef-421c-b166-66c18d868bf0.png)

This project demonstrates Pipeline Stages
## Building
Docker Image of a React App
## Staging & Testing
Running Maven Built Selenium Tests on Testing Dockerized Environment
## Publishing Latest Build 
Publishing on Docker Hub with Build Tag
## Deploying & Operating
Dockerized Application-Ready Environment 
![image](https://user-images.githubusercontent.com/46090098/187527653-96eb706f-344b-466b-a105-2050d27a2536.png)
![image](https://user-images.githubusercontent.com/46090098/187528064-762a1edb-cde1-4c02-a3da-2aa5b3c8df33.png)

This repository contains the following 
### Node-ReactJS project 
The node React JS project simply runs with ‘ npm install ’ and ‘ npm start ‘ commands
### Jenkinsfile
The pipeline groovy script inside Jenkinsfile has the pipeline script which declares all the sequential stages
### Dockerfile 
Contains all the commands to assemble an image which is ready with node dependencies and is hosted for Testing and Deployment.
### .dockerignore
Contains all the files to ignore while copying the workspace while assembling Docker image
### docker-compose.yml
It allows to deploy, combine and configure multiple docker-containers at the same time. Running ‘ docker-compose up ’ for start up your application

### Maven App
The Testing stage utilizes this dependency [Rahil-Parikh/selenium-maven-react-test](https://github.com/Rahil-Parikh/selenium-maven-react-test) 

## Documentation
[Report.pdf](https://github.com/Rahil-Parikh/MSD-demo-pipeline/files/9456018/MSD_Report.pdf)
## Drive Link
https://drive.google.com/drive/u/1/folders/1dE8gnNxPfOL9N9SeuMlFtD2mg9nyeM-0
## Video


https://user-images.githubusercontent.com/46090098/187531105-a62aefad-6fa4-4586-88cb-36d2f21a6f53.mp4


>[Video Link](https://drive.google.com/file/d/1vOlzAEY_4otJ5E9PkU3prLCm31hP5a79/view?usp=sharing)
## Pipeline Logs Link 
https://drive.google.com/file/d/1HaAgMqU9NIafO1xDZQ3LdMNJzLe8qGyV/view?usp=sharing
