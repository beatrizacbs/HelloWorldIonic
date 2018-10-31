import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public listaFilmes = new Array<any>();
  public nomeUsuario: string = "Nome do usuario bla bla bla";
  public objetoFeed = {
    titulo: "Beatriz",
    data: "qualquer data",
    descricao: "Qualquer texto de descricao",
    qtdLikes: "55",
    qtdComments: "88",
    timeComment: "11 min ago"
  }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  public alertaNaTela(): void {
    alert("Alerta!");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.alertaNaTela();
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const responseBody = JSON.parse(response._body);
        this.listaFilmes = responseBody.results;
        console.log(responseBody);
      },
      error => {
        console.log(error);
      });
  }

}
