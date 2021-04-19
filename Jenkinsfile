pipeline {
    agent any
    environment {
        registry = 'rahilparikh123/demo-react'
        dockerImage = ''
        // boolean testSuccessful = true
    }
    stages {
        stage('Building') {
            steps {
                script {
                    sh 'echo "Building Docker Image"'
                    dockerImage = docker.build(registry + ":${env.BUILD_ID}", '.')
                }
            }
        }
        stage('Staging & Testing') {
            steps {
                script {
                    sh 'echo "Syncing Test Versions."'
                    git([url: 'https://github.com/Rahil-Parikh/selenium-maven-react-test.git', branch: 'master', credentialsId: '5d26ceaf-1404-40e5-838c-b3d9d38a5f22'])
                    sh 'echo "Clean installing Test dependencies."'
                    sh 'mvn clean install assembly:assembly -DdescriptorId=jar-with-dependencies'
                }
                script {
                    sh 'echo "Staging React Application to a Container for Tests."'
                    dockerImage.withRun('--add-host=demo-react-test:172.17.0.2 -p 4200:4200') {
                        sh 'echo "Waiting for the React Application to be hosted."'
                        sh 'until nc -z 172.17.0.2 4200; do sleep 2; done'
                        'echo "React Application detected as running on 4200 port"'
                        sh 'sleep 2'
                        'echo "Running Selenium Tests"'
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
        stage('Publishing Latest Build') {
            steps {
                script {
                    docker.withRegistry( '', '61a56cd3-c74e-4f4b-ac5e-1579f33e981a' ) {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }
        stage('Deployment||Operate') {
            steps {
                script {
                    sh 'echo "Deploying Docker Container on Port 4021"'
                    dockerImage.run('--add-host=demo-react-test:172.17.0.10 -p 4201:4201 --name "Deploy||Operate"')
                }
            }
        }
    }
}
