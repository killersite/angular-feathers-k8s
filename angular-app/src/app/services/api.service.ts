import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  private _url: string = 'http://localhost:3030';

  get url(): string {
    return this._url;
  }

}
