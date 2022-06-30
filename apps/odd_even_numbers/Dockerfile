FROM node:16-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build odd_even_numbers 

CMD ["node","dist/apps/odd_even_numbers/main"]