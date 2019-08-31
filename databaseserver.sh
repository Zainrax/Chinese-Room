#!/bin/bash
cd /src
sudo apt-get -y install mysql-server
sudo service mysqld restart
sudo /usr/bin/mysqladmin -u root password 'password'
mysql -u root -ppassword -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;"
mysql -u root -ppassword -e "DROP USER ''@'localhost';"
mysql -u root -ppassword -e "DROP USER ''@'$(hostname)';"
mysql -u root -ppassword -e "DROP DATABASE test;"
mysql -u root -ppassword -e "FLUSH PRIVILEGES;"
sudo service mysqld restart
sudo chkconfig mysqld on

export MYSQL_PWD='insecure_mysqlroot_pw'
echo "mysql-server mysql-server/root_password password $MYSQL_PWD" | debconf-set-selections 
echo "mysql-server mysql-server/root_password_again password $MYSQL_PWD" | debconf-set-selections
echo "CREATE DATABASE chineseroom;" | mysql
echo "CREATE USER 'handler'@'%' IDENTIFIED BY 'insecure_db_pw';" | mysql

cat /src/setup-database.sql | mysql -u handler chineseroom
