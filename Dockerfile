FROM node:12-alpine

WORKDIR /usr/app/blog

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

RUN adduser -S -H -D next-docker

USER next-docker

EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "start"]