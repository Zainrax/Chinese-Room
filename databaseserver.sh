#!/bin/bash
cd /src
sudo apt-get update

export MYSQL_PWD='insecure_mysqlroot_pw'

echo "mysql-server mysql-server/root_password password $MYSQL_PWD" | debconf-set-selections 
echo "mysql-server mysql-server/root_password_again password $MYSQL_PWD" | debconf-set-selections

sudo apt-get -y install mysql-server

echo "CREATE DATABASE chineseroom;" | mysql

echo "CREATE USER 'handler'@'%' IDENTIFIED BY 'insecure_db_pw';" | mysql
echo "GRANT ALL PRIVILEGES ON chineseroom.* TO 'handler'@'%'" | mysql

export MYSQL_PWD='insecure_db_pw'

cat /src/setup-database.sql | mysql -u handler chineseroom

sed -i'' -e '/bind-address/s/127.0.0.1/0.0.0.0/' /etc/mysql/mysql.conf.d/mysqld.cnf

service mysql restart
