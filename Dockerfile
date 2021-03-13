FROM node:12.20.2-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]