import express from 'express';
import cors from 'cors';
import makeRoute from './utis/makeRoute';
import GetDevicesListController from './controllers/GetDevicesList';
// import routes here

export default class DevicesApp {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.loadRoutes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private loadRoutes(): void {
    // load routes here
    this.app.get('/test', (req, res) => { res.send('Server works') })
    this.app.get('/devices', makeRoute(new GetDevicesListController()))
  }

  public listen(port: number | string) {
    this.app.listen(port);
    console.log(`Server running on port ${port}`);
  }
}