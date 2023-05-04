FROM node:alpine
WORKDIR /usr/src/app
# COPY package*.json ./
COPY . .
RUN npm install

# CMD ["npm","run","test-init"]
EXPOSE 8080
CMD [ "npm", "start" ]