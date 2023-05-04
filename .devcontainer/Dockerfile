# FROM mongo
# WORKDIR /
# # ENV MONGO_INITDB_ROOT_USERNAME=admin
# # ENV MONGO_INITDB_ROOT_PASSWORD=password
# ENV MONGO_INITDB_ROOT_USERNAME=lab7
# ENV MONGO_INITDB_ROOT_PASSWORD=404mgbpw

# EXPOSE 27017
# FROM node:14
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# # CMD ["npm", "start"]
# CMD ["mongod"]

FROM node:14
WORKDIR /a
ENV MONGO_INITDB_ROOT_USERNAME=lab7
ENV MONGO_INITDB_ROOT_PASSWORD=404mgbpw
COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y mongodb
COPY . .
EXPOSE 3000
CMD ["npm", "start"]