import { Application } from 'express';

export abstract class RouterBase {
  protected app: Application;
  protected name: string;
  protected baseUrl: string;

  constructor(app: Application, baseUrl: string, name: string) {
    this.app = app;
    this.baseUrl = baseUrl;
    this.name = name;
  }

  abstract setupRoute(): void;

  getPath(): string {
    return `/${this.baseUrl}/${this.name}`;
  }
}
