ARG distro=node:12-alpine

# Throwaway build container
FROM ${distro} as build-container
ENV CI=true

WORKDIR /build

COPY ./package.json ./package-lock.json ./
RUN npm ci

COPY ./ ./

# Should also run tests here before or after the build
RUN npm run build


# Production container
FROM ${distro} as production-container
ENV NODE_ENV=production

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm ci --production

COPY --from=build-container /build/dist ./dist
COPY ./config ./config

CMD ["npm", "start"]
