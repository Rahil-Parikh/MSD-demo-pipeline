pipeline {
    agent any
    environment {
        registry = 'rahilparikh123/demo-react'
        dockerImage = ''
        // boolean testSuccessful = true
    }
    stages {
        stage('Building Image || Building') {
            steps {
                script {
                    dockerImage = docker.build(registry + ":${env.BUILD_ID}", '.')
                }
            }
        }
        stage('Running Docker Container || Staging & Testing') {
            steps {
                script {
                    git([url: 'https://github.com/Rahil-Parikh/selenium-maven-react-test.git', branch: 'master', credentialsId: '5d26ceaf-1404-40e5-838c-b3d9d38a5f22'])
                    sh 'mvn clean install assembly:assembly -DdescriptorId=jar-with-dependencies'
                }
                script {
                    dockerImage.withRun('--add-host=demo-react-test:172.17.0.2 -p 4200:4200') {
                        sh 'until nc -z 172.17.0.2 4200; do sleep 2; done'
                        sh 'sleep 2'
                        wrap([$class: 'Xvfb', additionalOptions: '', assignedLabels: '', autoDisplayName: true, debug: true, displayNameOffset: 1, installationName: 'default', parallelBuild: true, screen: '1024x768x24']) {
                            c -> sh 'java -Dfile.encoding=UTF-8 -classpath target/selenium.react.test-0.0.1-SNAPSHOT-jar-with-dependencies.jar selenium.react.test.ReactTest'
                        }
                    }
                }
            }
        }
        // stage('Selenium || Testing') {
        //     steps {
        //         script {
        //             echo 'No Test Pending'
        //         }
        //     }
        // }
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
        stage('Deploying Container || Deployment') {
            steps {
                script {
                    dockerImage.run('-p 4201:4201')
                }
            }
        }
    }
}
