FROM node:14
WORKDIR /app
ENV POSTGRES_DB postgres
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g ts-node
COPY . .
EXPOSE 3000
CMD ["ts-node", "src/index.ts"]
