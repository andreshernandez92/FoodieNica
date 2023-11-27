import ImageKit from 'imagekit';
import 'dotenv/config';
import { config } from '../../../config';

const imagekit = new ImageKit({
  publicKey: `${config.IMAGEKITPUBLICKEY}`,
  urlEndpoint: `${config.IMAGEKITURLENDPOINT}`,
  privateKey:  `${config.IMAGEKITPRIVATEKEY}`
});

export function uploads(
  file: string,
  public_id?: string,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  return new Promise((resolve) => {
    imagekit.upload({
      file: file,
      fileName: public_id!,
      extensions: [
        {
            name: public_id
        }]
    }, (error, result) => {
      if (error) resolve(error);
      resolve(result);
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
