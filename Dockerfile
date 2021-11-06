FROM node as base

WORKDIR /home/node/solder

COPY package.json ./
COPY yarn.lock ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build