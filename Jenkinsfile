pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'node:20'  // Imagen de Docker que usarás
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                git url: 'https://github.com/Chencho2323/integracion-continua.git', branch: 'main'
            }
        }

        stage('Construir Docker Image') {
            steps {
                script {
                    // Construir la imagen de Docker
                    sh 'docker build -t my-app .'
                }
            }
        }

        stage('Ejecutar Docker Compose') {
            steps {
                script {
                    // Usar Docker Compose para levantar los contenedores
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Pruebas') {
            steps {
                script {
                    // Ejecutar pruebas dentro del contenedor Docker
                    sh 'docker exec my-app npm test'
                }
            }
        }
    }

    post {
        always {
            echo 'El pipeline ha finalizado.'
        }
    }
}
