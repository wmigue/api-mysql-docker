###EJEMPLO MYSQL DOCKERIZADO EN UN CONTENEDOR

##COMANDOS DOCKER
```docker
docker run -it -p 3307:3306 -e MYSQL_ROOT_PASSWORD='0' mariadb/server
docker ps
docker exec -it <imagen_id> bash
# A CREAR DB Y TABLAS, CARGAR DATOS.
```