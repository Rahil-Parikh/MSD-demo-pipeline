pipeline {
    agent any
    environment {
        registry = 'rahilparikh123/demo-react'
        dockerImage = ''
    }
    stages {
        stage('Building Docker Image') {
            steps {
                script {
                    dockerImage = docker.build(registry + ":${env.BUILD_ID}", '.')
                }
            }
        }
        stage('Running Docker Container') {
            steps {
                script {
                    dockerImage.withRun('-p 4200:4200')
                }
            }
        }
        stage('Selenium Testing') {
            steps {
                script {
                    echo 'No Test Pending'
                }
            }
        }
        stage('Push Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry( '', '61a56cd3-c74e-4f4b-ac5e-1579f33e981a' ) {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}
