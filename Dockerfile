# BUILDER STAGE
FROM node:lts-alpine AS builder

# Checking version node
RUN node --version
# Select workdir
WORKDIR /build

# Copy code
COPY . /build

# Build application 
RUN npm install
RUN npm run build

# LAUNCHER SERVER STAGE
FROM node:lts-alpine
ENV DIR_SWAGGER='./dist/src/shared/docs/swagger.yml'
ENV DIR_ERROR='./dist/src/shared/handler/error.yml'

ENV PORT=8080

# Select workdir
WORKDIR /usr/src/app

# Checking version node
RUN node --version

# Install tools and change permissions
RUN apk add --no-cache tini \
    && chown node:node /usr/src/app 

# Add artifacts from builder image
COPY --chown=node:node --from=builder /build/dist dist
COPY --chown=node:node --from=builder /build/package.json package.json
COPY --chown=node:node --from=builder /build/node_modules node_modules
COPY --chown=node:node --from=builder /build/tsconfig.json tsconfig.json
# Copiar el archivo YAML necesario
COPY --chown=node:node --from=builder /build/src/shared/handler/error.yml dist/src/shared/handler/error.yml
COPY --chown=node:node --from=builder /build/src/shared/docs dist/src/shared/docs

RUN touch dist/.env

# Change to no-root user
USER node 
RUN mkdir -p /usr/src/app/logs \
    && ln -sf /dev/stdout /usr/src/app/logs/server.log

WORKDIR /usr/src/app/dist

# Run server
ENTRYPOINT ["tini", "--", "npm", "run", "server:prod:docker"]
