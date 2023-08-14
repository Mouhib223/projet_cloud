# Stage 1: Build the Angular application
FROM node:18.14.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2: Serve the Angular application with Nginx
FROM nginx:1.21.1-alpine
COPY --from=build /app/dist/upteck-crud /usr/share/nginx/html

# Replace the default nginx.conf with a custom one for Angular routing
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
