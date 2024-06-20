# syntax=docker/dockerfile:1

FROM node:22 as builder

# Copy the source code into the container.
COPY . .

RUN npm install && npm run build

FROM nginx:1.27

COPY --from=builder build/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that the application listens on.
EXPOSE 80
