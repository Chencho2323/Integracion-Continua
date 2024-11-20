FROM jenkins/jenkins:lts

# Instalar plugins adicionales si son necesarios
RUN jenkins-plugin-cli --plugins "workflow-aggregator git docker-workflow"

# Copiar scripts de inicialización
COPY init.groovy.d/ /var/jenkins_home/init.groovy.d/

# Establecer el usuario como root para instalar dependencias
USER root

RUN apt-get update && apt-get install -y docker.io

# Permitir a Jenkins ejecutar Docker
RUN usermod -aG docker jenkins

# Actualizar el sistema e instalar el plugin de Docker para Jenkins
RUN jenkins-plugin-cli --plugins "docker-workflow"

# Cambiar de nuevo a usuario Jenkins
USER jenkins

# Exponer el puerto de Jenkins
EXPOSE 8080 50000




