# Use official Node image to build the React app
FROM node:20-alpine as build

WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Use Nginx to serve the build
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3001
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]

