import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOps = {
    initialSlide:0,
    slidePerview:1,
    centeredSlides:true,
    speed:400
  };

  slides = [{
    imageSrc: "assets/img/logo.png",
    imageAlt: "Music Ionic",
    tittle: "Escucha tu música",
    subtitle:"EN CUALQUIER LUGAR",
    description:`Las mejores canciones en todo momento`,
    icon:"play"
  }, 
  {
    imageSrc: "assets/img/logo.png",
    imageAlt: "Music Ionic",
    tittle: "DIsfruta de tu video favorito",
    subtitle:"EN NUESTRO REPRODUCTOR",
    description:`Entra a modo video y reproduce el video de tu artista favorito`,
    icon:"videocam"
  }, 
  {
    imageSrc: "assets/img/logo.png",
    imageAlt: "Music Ionic",
    tittle: "Accede a nuestro exclusivo",
    subtitle:"MODO SPORT",
    description:`LCrea una playlist favorita para hacer deporte`,
    icon:"bicycle"}
  ];


  constructor(private router: Router, private storage: Storage ) { }
  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
  }

}
