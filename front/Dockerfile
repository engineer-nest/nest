FROM node:18.16.1

WORKDIR /app

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]