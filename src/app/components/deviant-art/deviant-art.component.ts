import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DeviantArtService } from 'src/app/services/deviant-art.service';

@Component({
  selector: 'app-deviant-art',
  templateUrl: './deviant-art.component.html',
  styleUrls: ['./deviant-art.component.scss']
})
export class DeviantArtComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput!: ElementRef;

  images: any[] = [];

  constructor(private deviantArtService: DeviantArtService) { }

  ngOnInit(): void {
    this.deviantArtService.checkAuthorization();
  }

  getDeviantArtToken() {
    // this.deviantArtService.getToken().subscribe(token => {
    //   console.log(token);
    //   // Here you would handle the token, like saving it in a variable or local storage
    // });
    this.deviantArtService.authorize();
  }

  getUserGallery() {

    if (this.deviantArtService.hasValidToken()) {
      const username = this.usernameInput.nativeElement.value;
      this.deviantArtService.getUserGallery(username).subscribe(gallery => {
        console.log(gallery);
        this.images = gallery as any[];
      });
    }

  }

}
