FROM node:12-alpine
WORKDIR /usr/src/thalas
COPY package*.json ./
RUN npm install
RUN apk add build-base
COPY . .
CMD ["node thalas-support.js"]