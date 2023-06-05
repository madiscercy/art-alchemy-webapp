import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviantArtService {
  private apiUrl = 'https://www.deviantart.com/oauth2/token';
  private apiUrl2 = '/oauth2';
  constructor(private http: HttpClient) { }

  getToken() {
    // const body = {

    //   client_id: 25851, // replace with your client id
    //   grant_type: 'client_credentials', // replace with your client secret
    // };

    // return this.http.get(this.apiUrl2, body);
    const authorizeUrl = 'https://www.deviantart.com/oauth2/authorize';
    const clientId = '25851';
    const redirectUri = 'https://artalchemy.io';
    const scope = 'browse';
    const state = this.generateRandomState();

    window.location.href = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}&state=${encodeURIComponent(state)}`;
  }
  generateRandomState() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}

