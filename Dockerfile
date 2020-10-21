FROM node:12-alpine
WORKDIR /usr/src/thalas
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "thalas-support.js"]