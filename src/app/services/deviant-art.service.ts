import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class DeviantArtService {
  private apiUrl = 'https://www.deviantart.com/oauth2/token';
  private apiUrl2 = '/oauth2';
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }
  // if you create a variable outside a function, you must use 'this.'

  authorize() {
    const authorizeUrl = 'https://www.deviantart.com/oauth2/authorize';
    const clientId = '25851';
    const redirectUri = 'https://artalchemy.io';
    const scope = 'browse';
    const state = this.generateRandomState();

    this.storageService.saveSessionStorage('state', state);

    window.location.href = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=${encodeURIComponent(
      scope
    )}&state=${encodeURIComponent(state)}`;
  }

  checkAuthorization() {
    // const returnedState = new URL(window.location.href).hash.split('&').find(param => param.startsWith('state=')).split('=')[1];
    const redirectedParams = new URL(window.location.href).hash
      .substring(1)
      .split('&');
    console.log(redirectedParams);

    if (redirectedParams) {
      let params: { [key: string]: string } = {};
      redirectedParams.forEach((param) => {
        let [key, value] = param.split('=');
        params[key] = value;
      });
      console.log(params);

      if (params['access_token'] && params['state']) {
        const savedState = this.storageService.getSessionStorage('state');
        const redirectedState = params['state'];
        console.log('savedState: ' + savedState);
        console.log('redirectedState: ' + redirectedState);
        if (savedState === redirectedState) {
          this.storageService.saveSessionStorage(
            'access_token',
            params['access_token']
          );
          this.storageService.saveSessionStorage(
            'refresh_token',
            params['refresh_token']
          );
          this.storageService.saveSessionStorage(
            'expires_in',
            params['expires_in']
          );
          this.storageService.saveSessionStorage(
            'token_type',
            params['token_type']
          );
          console.log('authorized');
          console.log('access_token: ' + params['access_token']);
        }
      }
    }
  }

  getUserGallery(username: string) {
    const accessToken = this.storageService.getSessionStorage('access_token');

    const apiUrl = 'https://www.deviantart.com/api/v1/oauth2/gallery/all';
    let params = new HttpParams();

    params = params.append('username', username);
    params = params.append('mature_content', false);

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.http.get(apiUrl, { headers, params });


  }

  hasValidToken() {
    const accessToken = this.storageService.getSessionStorage('access_token');
    // const refreshToken = this.storageService.getSessionStorage(
    //   'refresh_token'
    // );
    // const expiresIn = this.storageService.getSessionStorage('expires_in');
    // const tokenType = this.storageService.getSessionStorage('token_type');

    return accessToken;
  }

  private generateRandomState() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
