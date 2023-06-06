import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  getSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }
}

