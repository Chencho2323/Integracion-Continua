FROM jenkins/jenkins:lts

# Instalar plugins adicionales si son necesarios
RUN jenkins-plugin-cli --plugins docker-plugin configuration-as-code "workflow-aggregator git docker-workflow"

# Copiar scripts de inicialización
COPY init.groovy.d/ /var/jenkins_home/init.groovy.d/
COPY casc.yaml /var/jenkins_home/casc.yaml

# Establecer el usuario como root para instalar dependencias
USER root

RUN apt-get update && apt-get install -y \
    docker.io \
    docker-compose \
    && rm -rf /var/lib/apt/lists/*

#RUN jenkins-plugin-cli --plugins "Docker"

# Permitir a Jenkins ejecutar Docker
RUN usermod -aG docker jenkins

# Configurar Docker para escuchar en TCP y Unix
RUN echo '{ "hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"] }' > /etc/docker/daemon.json

# Exponer el puerto 2375 para Docker
EXPOSE 2375

# Cambiar de nuevo a usuario Jenkins
USER jenkins

# Exponer el puerto de Jenkins
EXPOSE 8080 50000




