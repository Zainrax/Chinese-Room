# Chinese-Room
Web application simulating Searle's Chinese Room Argument hosted through AWS.

# Description
This program is created using React, node.js, and MySQL in three seperate servers using AWS. The web server is hosted through S3 static hosting, the node backend is hosted on an EC2 server, and it utilizes Amazon RDS MySql for the database.

# Website
The website is accessed through:
[Demo](http://chinese-room-site.s3-website-us-east-1.amazonaws.com/)

# Source

If you wish to build and modify it will require you to setup an S3 bucket, and a mysql database.

## Build
Pre-installation dependencies:
- aws-cli
- node & npm

You'll need to export your aws credentials into your shell:

### Linux
```
export AWS_ACCESS_KEY_ID=[Insert here]
export AWS_SECRET_ACCESS_KEY=[Insert here]
export AWS_SESSION_TOKEN=[Insert here]
```

### Windows
```
SET AWS_ACCESS_KEY_ID=[Insert here]
SET AWS_SECRET_ACCESS_KEY=[Insert here]
SET AWS_SESSION_TOKEN=[Insert here]
```

### Server Setup
Create the database first through Amazon RDS, using MySQL making sure that it is in the same VPC that your webserver
will be in.

You will need to change the ip found in the characterhandler/src/index.js for the database.
```
git clone https://github.com/Zainrax/Chinese-Room.git
cd Chinese-Room/
vagrant up
```
This will set up an aws EC2 through vagrant for the node backend.

You will need to open ports in security groups:
- 3003 [Node Server]
- 3306 [MySQL]
- 80 [HTTP]

Run the following inside your EC2 which you can access using *"vagrant ssh"*:
```
mysql -h [database ip] -P 3306 -u admin
CREATE DATABASE chineseroom
GRANT ALL PRIVILEGES ON chineseroom.* TO 'admin'@'%';
exit
mysql -h [database ip] -P 3306 -u admin -p chineseroom < /src/setup-database.sql
```

Finally cd into source/webserver and change the ip found in src/App/App.js to your EC2 ip, then build.
```
npm install
npm run build
```

You can then deploy this build folder onto S3

Follow this guide on how-to can be found [here](https://medium.com/serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6)

You should now be able to access the S3 bucket website, if working the characters on the left should change.

