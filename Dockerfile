# syntax=docker/dockerfile:1
FROM node:12-alpine

WORKDIR /app
RUN npm i npm@latest -g
COPY . .
RUN npm i -E
CMD ["node", "src/index.js"]