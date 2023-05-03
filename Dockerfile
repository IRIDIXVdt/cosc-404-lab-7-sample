FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# CMD ["npm","run","test-init"]
EXPOSE 8080
CMD [ "npm", "start" ]