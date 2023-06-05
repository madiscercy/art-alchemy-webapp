import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class DeviantArtService {
  private apiUrl = 'https://www.deviantart.com/oauth2/token';
  private apiUrl2 = '/oauth2/token'; 
  constructor(private http: HttpClient) { }

  getToken() {
    const body = {
      
      client_id: 25851, // replace with your client id
      client_secret: 'cc20d3a36274142704762795cfe80063',
      grant_type: 'client_credentials', // replace with your client secret
    };
    
    return this.http.post(this.apiUrl, body);
  }
}
