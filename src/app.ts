import express, {Express} from 'express';
import { FoodieNicaServer } from './setupServer';
import databaseConnection from './setupDatabase';
class Application{
    public initialize():void{
        this.loadConfig();
        databaseConnection();
        const app: Express = express();
        const server:FoodieNicaServer = new FoodieNicaServer(app);
        server.start();
    }
    private loadConfig(): void {
      for(const[key, value] of Object.entries(this)){
        if(value === undefined) {
            throw new Error(`Configuration ${key} is undefined.`);
        }
      }
    }
}
const application: Application = new Application();
application.initialize();
