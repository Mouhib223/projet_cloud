pipeline {
    agent any 
    environment {
        DOCKER_IMAGE_NAME = "raykadri/upteck_crud_angular-app:v8"
    }

    stages {
         stage('Clean Workspace') {
        steps {
            cleanWs()
            checkout scm
            
        }
    }
     
 
        stage('Build and Push Docker Image') {
            steps {
                // Build the Angular app
                sh 'npm install --force '
                sh 'ng build '

                // Build the Docker image
                sh 'docker build -t $DOCKER_IMAGE_NAME .'

                // Log in to Docker Hub
                withDockerRegistry(credentialsId: 'dockerhub_id', url: '') {
                    // Push the Docker image to Docker Hub
                    sh 'docker push $DOCKER_IMAGE_NAME'
                }
            }
        }

        stage('Deploy to AKS') {
            steps {
                // Use Azure CLI to configure Kubernetes context (assuming you've set up Azure CLI credentials)
                sh ' az aks get-credentials --resource-group Uptech_crud  --name Upteck'

                // Apply Kubernetes deployment
                sh "kubectl apply -f upteck-front-deployement.yaml "
            }
        }
    }
}
