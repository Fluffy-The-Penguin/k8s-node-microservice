FROM node:20-alpine AS builder

WORKDIR /app

COPY *.json .

RUN npm install

COPY server.js .



FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

ENV PORT=3000

EXPOSE 3000

USER node

CMD ["node", "server.js"]
