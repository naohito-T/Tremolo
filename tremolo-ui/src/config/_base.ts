export abstract class BaseConfig {
  protected runEnv: string;
  protected baseURL: string;

  constructor() {
    this.runEnv = process.env.NODE_ENV ?? 'development';
    this.baseURL = this.runEnv === 'development' ? 'http://localhost:10300/' : 'https://';
  }
}
