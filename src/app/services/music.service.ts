import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    baseUrl = 'http://ws.audioscrobbler.com/2.0/';
    apiKey = 'b432d922a44d94f9edd7a83e379a9271';

    constructor(public http: HttpClient) {
    }

    getAllArtists() {
        const url = this.baseUrl + '?method=library.getartists&api_key=' + this.apiKey + '&user=joanofarctan&format=json';
        return this.http.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getMusicTrackByName(name: string) {
        const url = this.baseUrl + '?method=track.search&track=' + name + '&api_key=' + this.apiKey + '&format=json';
        return this.http.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getMusicTrackByNameAndArtist(artist, trackName) {
        // tslint:disable-next-line:max-line-length
        const url = this.baseUrl + '?method=track.getInfo&api_key=e10c7683cae1474051fb275de242c610&artist=' + artist + '&track=' + trackName + '&format=json';
        return this.http.get(url).pipe(map((res: any) => {
            return res;
        }));
    }
}