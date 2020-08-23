import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getArtists() {
    return dataArtists.items;
  }
}
