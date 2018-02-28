import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  private _rest_url: string = 'http://localhost:3030/api/v1';
  // private _url: string = 'http://localhost:3030/';
  private _url: string = '/';

  get url(): string {
    return this._url;
  }

}
