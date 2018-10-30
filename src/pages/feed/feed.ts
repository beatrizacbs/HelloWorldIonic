import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objetoFeed = {
     titulo:"Beatriz",
     data:"qualquer data",
     descricao:"Qualquer texto de descricao",
     qtdLikes:"55",
     qtdComments:"88",
     timeComment:"11 min ago"
  }

  public nomeUsuario : string = "Nome do usuario bla bla bla";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public alertaNaTela():void{
    alert("Alerta!");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.alertaNaTela();
  }

}
