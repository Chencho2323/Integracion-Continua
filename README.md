# Proyecto de Integración Continua con Docker

Este proyecto consiste en una API de Node.js conectada a una base de datos PostgreSQL, todo gestionado por Docker y Docker Compose. La aplicación demuestra cómo integrar diferentes servicios usando contenedores.

## Tabla de Contenidos
- [Requisitos](#requisitos)
- [Clonar el Repositorio](#clonar-el-repositorio)
- [Navegar al Proyecto](#navegar-al-proyecto)
- [Iniciar los Contenedores con Docker](#iniciar-los-contenedores-con-docker)
  - [Explicación de los Contenedores](#explicación-de-los-contenedores)
  - [Puertos](#puertos)
- [Detener los Contenedores](#detener-los-contenedores)
- [Archivos Importantes](#archivos-importantes)
- [Notas](#notas)

## Requisitos

Antes de comenzar, asegúrate de tener los siguientes programas instalados en tu sistema:

- [Docker](https://www.docker.com/get-started) (incluye Docker Compose)
- [Git](https://git-scm.com/)

## Clonar el Repositorio

Primero, clona este repositorio en tu máquina local. Abre una terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/Chencho2323/integracion-continua.git
```
## Navegar al proyecto

Una vez clonado el repositorio, navega al directorio del proyecto:
```bash
cd integracion-continua
```
## Iniciar los Contenedores con Docker

El proyecto ya está configurado para usar Docker y Docker Compose. Para levantar los contenedores y poner en marcha la aplicación, simplemente ejecuta el siguiente comando en la raíz del proyecto:

```bash
docker-compose up --build
```

## Explicación de los Contenedores

Backend (Node.js): La API de Node.js se ejecuta en un contenedor que se conecta a una base de datos PostgreSQL.

Base de Datos (PostgreSQL): La base de datos se ejecuta en otro contenedor y se inicializa automáticamente con un usuario, contraseña y base de datos predeterminados.

Al ejecutar docker-compose up --build, Docker descargará las imágenes necesarias, instalará las dependencias de Node.js, y configurará todo para que los servicios se comuniquen correctamente

## Puertos

-La aplicación Node.js se expone en el puerto 3000, por lo que podrás acceder a ella desde tu navegador en http://localhost:3000.

## Detener los Contenedores

```bash
docker-compose down
```
## Archivos Importantes

Dockerfile: Configura el contenedor del backend con Node.js.

docker-compose.yml: Gestiona los contenedores de Docker para la API y la base de datos.

index.js: El archivo principal de la API, donde se configura la conexión a la base de datos PostgreSQL y se manejan las rutas.

## Notas

Asegúrate de que los contenedores estén corriendo antes de intentar acceder a la aplicación en el navegador.












