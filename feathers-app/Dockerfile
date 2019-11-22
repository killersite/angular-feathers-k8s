FROM node:8-alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm i

COPY . .

# Expose the port the app runs in
EXPOSE 3030

CMD ["npm", "start"]
