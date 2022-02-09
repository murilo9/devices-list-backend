import DevicesApp from './App';

require('dotenv').config();
const PORT = process.env.PORT || 8888;

const devicesApp = new DevicesApp();
devicesApp.listen(PORT);
