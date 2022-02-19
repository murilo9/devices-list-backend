import DevicesApp from './App';

require('dotenv').config();
const PORT = process.env.PORT || 8080;

const devicesApp = new DevicesApp();
devicesApp.listen(PORT);
