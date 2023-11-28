import ImageKit from 'imagekit';
import 'dotenv/config';
import { config } from '../../../config';

const imagekit = new ImageKit({
  publicKey: `${config.IMAGEKITPUBLICKEY}`,
  privateKey:  `${config.IMAGEKITPRIVATEKEY}`,
  urlEndpoint: `${config.IMAGEKITURLENDPOINT}`
});

export function uploads(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  public_id?: string,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  return new Promise((resolve,reject) => {
    imagekit.upload({
      file: data,
      fileName: public_id!,
  }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
  });
  });
}

export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<any> {
  return new Promise((resolve) => {
    imagekit.upload({
      file: file,
      fileName: public_id!,
      useUniqueFileName: !overwrite,
      isPrivateFile: invalidate
    }, (error, result) => {
      if (error) resolve(error);
      resolve(result);
    });
  });
}
