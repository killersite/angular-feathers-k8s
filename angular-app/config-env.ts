import { writeFile } from 'fs';
require('dotenv').config();

const environment = process.env.ENVIRONMENT;
let apiURL;

if (environment === 'production') {
  apiURL = process.env.FEATHERS_URI;
} else {
  apiURL = process.env.FEATHERS_URI;
}

const targetPath = `./src/environments/environment.prod.ts`;
const envConfigFile = `export const environment = {
    production: true,
    socketio: '${apiURL}'};`;

writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    console.log(err);
  }
});
