FROM node:12.20

WORKDIR /blog

COPY package*.json ./

RUN npm install --global pm2

RUN npm install

COPY . .

RUN npm run build

RUN adduser --system --no-create-home --disabled-password --disabled-login --group next-docker

EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "start"]