FROM node:18
WORKDIR /usr/src/app
COPY . .
WORKDIR /usr/src/app/app
RUN npm install
EXPOSE 3000
CMD ["node", "./lib/app.js"]