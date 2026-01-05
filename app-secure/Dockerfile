FROM node:20-alpine3.22

RUN apk update && apk upgrade --no-cache

WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY app.js ./

EXPOSE 3000
CMD ["node", "app.js"]
