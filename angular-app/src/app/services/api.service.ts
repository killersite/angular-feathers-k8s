import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  private _rest_url: string = '/api/v1';
  // FIXME when run locally
  // private _url: string = 'http://localhost:3030/';
  // when run in docker
  private _url: string = '/';
  // private _url: string = `http://feathers:3030/`;

  get url(): string {
    // return environment.socketio;
    return this._url;
  }
}
