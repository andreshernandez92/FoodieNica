import { config } from '@root/config';
import Logger = require("bunyan")
import { createClient } from 'redis';

export type RedisClient = ReturnType<typeof createClient>;


export abstract class BaseCache {
  client: RedisClient;
  log: Logger;


constructor(cacheName: string){
  this.client = createClient({url: config.REDIST_HOST});
  this.log = config.createLogger(cacheName);
  this.cacherError();
}
private cacherError(): void {
  this.client.on('error',(error:unknown) => {
    this.log.error(error);
  });
}
}
