# Chinese-Room
Web application simulating Searle's Chinese Room Argument through VM environments.

# Description
This program is created using React, node.js, and MySQL in three seperate vms using vagrant.

# Usage
## Initial Build
using vagrant:
```
git clone https://github.com/Zainrax/Chinese-Room.git
cd Chinese-Room/
vagrant up
```
This will set up three vms in vagrant, the web server, the backend, and the database.
No futher modification is needed, though you can change the ip in the vagrant file incase of any conflicts.

## Website
The website is accessed through:
```
http://192.168.2.8/:5000
```
