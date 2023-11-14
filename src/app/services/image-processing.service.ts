import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ImageProcessingResponse {
  newImage: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageProcessingService {
  private apiUrl =
    'https://v1pu4a0z9b.execute-api.us-east-1.amazonaws.com/api/art-alchemy/process';

  constructor(private http: HttpClient) {}

  processImage(
    imageData: string,
    style: string
  ): Observable<ImageProcessingResponse> {
    const payload = { imageData, style };

    const headers = new HttpHeaders({
      'x-api-key': 'pL1nxvneOKaIJ9J1YJOfg93e3SDzxcjXOJYGBmif',
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, payload, {
      headers,
    }) as Observable<ImageProcessingResponse>;
  }
}
