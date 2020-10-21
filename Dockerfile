FROM node:12-alpine AS builder
RUN apk add --no-cache yarn curl bash

# un extra para que la imagen pese menos
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

# por si necesitas canvas
RUN apk add --no-cache sudo build-base g++ libpng libpng-dev jpeg-dev pango-dev cairo-dev giflib-dev python;
RUN apk --no-cache add ca-certificates wget  && \
wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.29-r0/glibc-2.29-r0.apk && \
apk add glibc-2.29-r0.apk;
# por si necesitas canvas

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
RUN rm -rf .node-gyp
# para que pese menos
RUN /usr/local/bin/node-prune 


FROM node:12-alpine AS production
WORKDIR /home/node/code
COPY --from=builder /usr/src/app/node_modules ./node_modules/
COPY . .
CMD ["npm","run", "start"]
