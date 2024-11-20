FROM jenkins/jenkins:lts

# Instalar plugins adicionales si son necesarios
RUN jenkins-plugin-cli --plugins "workflow-aggregator git docker-workflow"

# Copiar scripts de inicialización
COPY init.groovy.d/ /var/jenkins_home/init.groovy.d/

# Exponer los puertos estándar de Jenkins
EXPOSE 8080 50000

