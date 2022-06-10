import type { FirebaseOptions } from 'firebase/app';
import { BaseConfig } from '@/config/_base';
import { FirebaseInitializeParams } from '@/types';
import { checkEnv } from '@/utils/check';

export class AppConfig {}

export class AppMetaConfig extends BaseConfig {
  private title = 'ギャラリーサイト | 画像';

  private description = '【非パプリック】な画像ギャラリーサイトです。';

  private ogSiteName = 'Tremolo Gallery';

  private ogURL = this.baseURL;

  private ogImage = this.runEnv === 'development' ? 'localhost' : 'https/';

  public get getTitle(): string {
    return this.title;
  }

  public get getDesc(): string {
    return this.description;
  }

  public get getOgSiteName(): string {
    return this.ogSiteName;
  }

  public get getOgURL(): string {
    return this.ogURL;
  }

  public get getOgImage(): string {
    return this.ogImage;
  }
}

/**
 * @desc firebase configs.
 */
export class AppFirebaseConfig extends BaseConfig {
  private API_KEY;
  private AUTH_DOMAIN;
  private PROJECT_ID;
  private STORAGE_BUCKET;
  private MESSAGING_SENDER_ID;
  private APP_ID;
  private MEASUREMENT_ID;

  constructor() {
    super();
    try {
      this.API_KEY = checkEnv('API_KEY');
      this.AUTH_DOMAIN = checkEnv('AUTH_DOMAIN');
      this.PROJECT_ID = checkEnv('PROJECT_ID');
      this.STORAGE_BUCKET = checkEnv('STORAGE_BUCKET');
      this.MESSAGING_SENDER_ID = checkEnv('MESSAGING_SENDER_ID');
      this.APP_ID = checkEnv('APP_ID');
      this.MEASUREMENT_ID = checkEnv('MEASUREMENT_ID');
    } catch (e: unknown) {
      console.log('環境変数error');
    }
  }

  public get getFirebaseInitializeConfig(): FirebaseOptions {
    return {
      apiKey: this.API_KEY!,
      authDomain: this.AUTH_DOMAIN!,
      projectId: this.PROJECT_ID!,
      storageBucket: this.STORAGE_BUCKET!,
      messagingSenderId: this.MESSAGING_SENDER_ID!,
      appId: this.APP_ID!,
      measurementId: this.MEASUREMENT_ID!,
    };
  }
}
