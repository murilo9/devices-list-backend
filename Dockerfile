FROM node:12-alpine

WORKDIR /usr/devices-list-api

COPY package.json package-lock.json tsconfig.json .env ./

RUN npm i --silent && npm i -g typescript --silent

COPY . .

RUN npm run build --silent

EXPOSE 8080

CMD [ "npm", "start" ]