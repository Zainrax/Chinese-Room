#!/bin/bash
sudo apt-get install mysql-client-core-5.7
cd /src
npm install
node src/index.js &