# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci;     elif [ -f yarn.lock ]; then yarn install --frozen-lockfile;     elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile;     else npm i; fi
COPY . .
RUN npm run build

# Runtime (Nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# default.conf comes from the Helm chart via ConfigMap at deploy time
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
