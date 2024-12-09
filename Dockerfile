# Creating multi-stage build for production
FROM node:20.11.0-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ENV NODE_ENV=production

WORKDIR /opt/app

COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build --debug
RUN yarn install --production

# Creating final production image
FROM node:20.11.0-alpine
RUN apk add --no-cache vips-dev curl
ENV NODE_ENV=production

WORKDIR /opt/app
COPY --from=build /opt/app ./

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["yarn", "start"]
