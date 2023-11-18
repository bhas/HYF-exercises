# Prerequisties:

### Install Docker 
1. Install Docker Desktop
2. Verify it works by running: `docker run hello-world`

### Install MySQL 
1. Install mysql server by running: `docker pull mysql/mysql-server:latest`
2. Verify that it is installed: `docker images`


### Start a new local MySQL Server
1. Start MySQL server as a new app in Docker: `docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=pass -e MYSQL_ROOT_HOST=% -d mysql/mysql-server`
2. List all running docker apps: `docker ps` 
3. Verify that your app with image `mysql/mysql-server` is running

## Connect to MySQL Server from VS Code
1. Open VS Code
2. Install MySQL extension
3. Create a new connection under the extension
    * Name = mysql
    * Host = 0.0.0.0
    * Port = 3306
    * Username = root
    * Password = pass

