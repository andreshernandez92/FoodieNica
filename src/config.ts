import dotenv from 'dotenv';
import bunyan from 'bunyan';

dotenv.config({});

class Config {
    public DATABASE_URL: string | undefined;
    public JWT_TOKEN: string | undefined;
    public NODE_ENV: string | undefined;
    public SECRET_KEY_ONE: string | undefined;
    public SECRET_KEY_TWO: string | undefined;
    public CLIENT_URL: string | undefined;
    public REDIST_HOST: string | undefined;
    public IMAGEKITPUBLICKEY: string | undefined;
    public IMAGEKITURLENDPOINT: string | undefined;
    public IMAGEKITPRIVATEKEY: string | undefined;
    public IMAGEKITFOLDERURL: string | undefined;

private readonly DEFAULT_DATABASE_URL = 'mongodb';

public createLogger(name: string): bunyan {
     return bunyan.createLogger({name, level: 'debug'});
}

constructor(){
    this.DATABASE_URL =  process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    this.JWT_TOKEN =  process.env.JWT_TOKEN || '1234';
    this.NODE_ENV =  process.env.NODE_ENV || '';
    this.SECRET_KEY_ONE =  process.env.SECRET_KEY_ONE ||'';
    this.SECRET_KEY_TWO =  process.env.SECRET_KEY_TWO || '';
    this.CLIENT_URL =  process.env.CLIENT_URL || '';
    this.REDIST_HOST =  process.env.REDIST_HOST || '';
    this.IMAGEKITPUBLICKEY = process.env.IMAGEKITPUBLICKEY;
    this.IMAGEKITURLENDPOINT = process.env.IMAGEKITURLENDPOINT;
    this.IMAGEKITPRIVATEKEY =process.env.IMAGEKITPRIVATEKEY;
    this.IMAGEKITFOLDERURL =process.env.IMAGEKITFOLDERURL;
}

};

export const config: Config = new Config();

