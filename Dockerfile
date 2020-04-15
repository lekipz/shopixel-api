FROM node:13

WORKDIR /app
COPY package.json .
COPY yarn.lock .


