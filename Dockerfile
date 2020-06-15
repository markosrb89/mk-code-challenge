FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM mhart/alpine-node
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist .
CMD ["serve", "-p", "80", "-s", "."]
