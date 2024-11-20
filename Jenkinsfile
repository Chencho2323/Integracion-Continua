pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'IntegracionContinua'  // Nombre de la imagen Docker que se creará
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
                    // Construir la imagen Docker usando el Dockerfile del repositorio clonado
                    sh 'docker build -t ${DOCKER_IMAGE} .'
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
                    sh "docker exec ${DOCKER_IMAGE} npm test"
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

