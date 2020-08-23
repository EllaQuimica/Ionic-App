import { Component } from "@angular/core";
import { MusicService } from "../services/music.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  
  slideOps = {
    initialSlide: 1,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };
  artists: any[] = [];
  constructor(private musicService: MusicService) {}

  ionViewDidEnter() {
    this.musicService.getArtists()
      this.artists = this.musicService.getArtists();
      console.log(this.artists);
  }
}

