pipeline {
    agent {
        dockerfile true
    }
    environment {
        registry = 'rahilparikh123/demo-react'
        dockerImage = ''
    }
    stages {
        stage('Building Docker Image') {
            steps {
                script {
                    dockerImage = docker.build(registry + ":${env.BUILD_ID}")
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
                    env.registryCredential = input message: 'Enter DockerHub credentials', parameters: [ password(defaultValue: 'password', description: '', name: 'hidden')]
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}
