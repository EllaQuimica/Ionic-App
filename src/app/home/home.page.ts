import { Component, OnInit } from "@angular/core";
import { MusicService } from '../services/music.service'

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {

  public items: any;

  constructor( private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.getAllArtists().subscribe(res =>  {
      this.items = res.artists.artist;
    });
  }

}