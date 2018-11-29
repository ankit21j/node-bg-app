import * as express from "express"
import * as bodyParser from "body-parser"

import * as mongoose from "mongoose"

import * as logger from "winston"

import { Routes } from "./routes/index"

class App {
  public app: express.Application
  public routePrv: Routes = new Routes()

  public mongoUrl: string = "mongodb://mongo/test-database"

  constructor() {
    this.app = express()
    this.config()
    this.routePrv.routes(this.app)
    this.mongoSetup()
  }

  private config(): void {
    this.app.use(bodyParser.json())
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise
    mongoose.connect(this.mongoUrl, (err) => {
      if(err){
        logger.error(err);
        logger.error('Mongo not connected')
        return ;
      }
      logger.info('Connected to mongo')
    })
  }
}

export default new App().app
