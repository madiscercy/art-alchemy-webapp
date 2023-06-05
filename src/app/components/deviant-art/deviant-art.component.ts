import { Component, OnInit } from '@angular/core';
import { DeviantArtService } from 'src/app/services/deviant-art.service';

@Component({
  selector: 'app-deviant-art',
  templateUrl: './deviant-art.component.html',
  styleUrls: ['./deviant-art.component.scss']
})
export class DeviantArtComponent implements OnInit {
  

  constructor(private deviantArtService: DeviantArtService) { }

  ngOnInit(): void {
    
  }
    
  getDeviantArtToken() {
    // this.deviantArtService.getToken().subscribe(token => {
    //   console.log(token);
    //   // Here you would handle the token, like saving it in a variable or local storage
    // });
    this.deviantArtService.getToken();
  }

}
