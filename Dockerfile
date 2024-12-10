FROM node:20.10-alpine AS build

ARG VITE_BACKEND_URL
ARG VITE_STAND

ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
ENV VITE_STAND=${VITE_STAND}

WORKDIR /code
COPY schema.gql codegen.ts package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=build /code/dist .
ADD .github/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
