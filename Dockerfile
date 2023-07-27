#first stage
FROM node:18.14.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build
#second stage
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/upteck-crud /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf




