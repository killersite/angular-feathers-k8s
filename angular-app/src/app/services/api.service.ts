import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  // private _url: string = 'http://localhost';
  private _url: string = '/';

  get url(): string {
    return this._url;
  }

}
