import { IAuthJob } from '@auth/interfaces/auth.interface';
import { BaseQueue } from '@service/queues/base.queue';
import { userWorker } from '../../workers/auth.worker';

class userQueue extends BaseQueue {
constructor(){
  super('user');
  this.processJob('addUserToDB', 5, userWorker.addAuthUserToDB);

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
public addUserJob(name: string, data: any): void{
  this.addJob(name,data);
}

}

export const userQueue: userQueue = new userQueue();

