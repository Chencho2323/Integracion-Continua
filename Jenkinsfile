pipeline {
    agent any  // Este agente puede ser cualquier nodo disponible en Jenkins

    stages {
        stage('Clonar Repositorio') {
            steps {
                script {
                    // Clonar el repositorio desde GitHub
                    git url: 'https://github.com/Chencho2323/integracion-continua.git', branch: 'main'
                }
            }
        }

        stage('Verificar Archivos Clonados') {
            steps {
                script {
                    // Verificar que los archivos fueron correctamente clonados
                    sh 'ls -alh'
                }
            }
        }

        stage('Preparar Ambiente Jenkins') {
            steps {
                script {
                    // Aquí puedes agregar cualquier paso de configuración o instalación necesaria
                    echo 'Preparando el ambiente Jenkins'
                }
            }
        }

        stage('Construir Contenedores') {
            steps {
                script {
                    // Ejecuta cualquier comando de Docker o Docker Compose
                    sh 'docker-compose up --build -d'
                }
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    // Puedes agregar pruebas aquí, como pruebas unitarias o de integración
                    echo 'Ejecutando pruebas...'
                    // Ejemplo con Docker Compose: sh 'docker-compose exec <service_name> npm test'
                }
            }
        }

        stage('Desplegar Producción') {
            steps {
                script {
                    // Aquí puedes incluir pasos para desplegar la aplicación en un entorno de producción
                    echo 'Desplegando en producción...'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completado con éxito.'
        }
        failure {
            echo 'Pipeline falló.'
        }
    }
}
