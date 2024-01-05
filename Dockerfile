FROM node:21-alpine
COPY . .
ENV PORT=8000
RUN npm install
ENTRYPOINT ["node", "main.js"]


