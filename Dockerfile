FROM node:12-alpine as builder
LABEL stage=builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN npm install -g yarn --force
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html