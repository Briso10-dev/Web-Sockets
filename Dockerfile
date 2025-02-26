FROM node:20-alpine

WORKDIR /webSockets

COPY . .

RUN npm install

EXPOSE ${PORT}

CMD ["npm", "start"]