# Etapa de construcción
FROM node:lts-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /build

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:lts-alpine

# Establecer directorio de trabajo
WORKDIR /usr/src/app

# Variables de entorno
ENV DIR_SWAGGER='./dist/src/shared/docs/swagger.yml'
ENV DIR_ERROR='./dist/src/shared/handler/error.yml'
ENV PORT=8080

# Instalar tini y cambiar permisos
RUN apk add --no-cache tini \
    && chown node:node /usr/src/app

# Copiar artefactos desde la etapa de construcción
COPY --chown=node:node --from=builder /build/dist dist
COPY --chown=node:node --from=builder /build/package.json package.json
COPY --chown=node:node --from=builder /build/node_modules node_modules
COPY --chown=node:node --from=builder /build/tsconfig.json tsconfig.json

# Copiar archivos YAML necesarios
COPY --chown=node:node --from=builder /build/src/shared/handler/error.yml dist/src/shared/handler/error.yml
COPY --chown=node:node --from=builder /build/src/shared/docs dist/src/shared/docs

# Crear archivo .env
RUN touch dist/.env

# Cambiar a usuario no-root
USER node

# Crear directorio de logs y enlace simbólico para logs
RUN mkdir -p /usr/src/app/logs \
    && ln -sf /dev/stdout /usr/src/app/logs/server.log

# Establecer directorio de trabajo para la ejecución
WORKDIR /usr/src/app/dist

# Comando para ejecutar el servidor
ENTRYPOINT ["tini", "--", "npm", "run", "server:prod:docker"]
