FROM node:alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 9000
RUN npm install -g serve
RUN npm run build
CMD ["serve", "-s", "build","-l","9000"]