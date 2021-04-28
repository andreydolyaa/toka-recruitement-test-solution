FROM node

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/app

WORKDIR /usr/src/app/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","serve"]