#!/bin/bash
cd /src
npm install
npm install -g serve
npm install -g react-scripts
npm run build
serve -s build