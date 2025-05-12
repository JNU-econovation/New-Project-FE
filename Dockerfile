# base
FROM node:20-alpine AS base
RUN npm install -g pnpm
WORKDIR /app

# builder
FROM base AS builder
COPY . .
RUN pnpm install
RUN pnpm build

# runner
FROM base AS runner
COPY --from=builder /app ./
EXPOSE 3000
CMD ["pnpm", "start"]
