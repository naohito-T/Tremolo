import { BaseConfig } from '@/config/_base';

export class AppConfig {}

export class AppMetaConfig extends BaseConfig {
  private title: string = 'ギャラリーサイト | 画像';

  private description: string = '【非パプリック】な画像ギャラリーサイトです。';

  private ogSiteName: string = 'Tremolo Gallery';

  private ogURL: string = this.baseURL;

  private ogImage: string = this.runEnv === 'development' ? 'localhost' : 'https/';

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
