FROM node20:alpine

WORKDIR /webSockets

COPY . .

RUN npm install

CMD ["npm", "start"]