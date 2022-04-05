FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:lts-alpine
COPY --from=build /app/build /app
WORKDIR /app
COPY --from=build /app/package-prod.json ./
CMD ["node", "."]
