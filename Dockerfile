FROM node:alpine3.18
WORKDIR /empdocker
COPY . .
RUN npm i
RUN npm run build 
EXPOSE 4173
CMD ["npm","run","preview"]