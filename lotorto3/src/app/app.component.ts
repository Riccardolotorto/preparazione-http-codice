import { Component } from '@angular/core';
import { Prenotazione } from './prenotazione.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lotorto3';
  data !: Prenotazione[];
  risposta !: Observable<Prenotazione[]>;
  nascondi : boolean = false;
  ciclo !: Prenotazione;
  obs !: Observable<{id : number}>;
  nuova !: Prenotazione;
  constructor(private http: HttpClient) {
    this.risposta = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking');
    this.risposta.subscribe(this.getData);
  }
  getData = (dati: Prenotazione[]) => {
    this.data = dati;
  }
  prenota(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement): boolean {
    let posted = JSON.stringify({
      "nome": nome.value,
      "cognome": cognome.value,
      "data": data.value,
      "ora": ora.value,
      "indirizzo": indirizzo.value,
      "email": email.value,
      "telefono": telefono.value
    });
    this.obs = this.http.post<{id : number}>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking', posted);
    this.nuova = new Prenotazione(nome.value, cognome.value, data.value, ora.value, indirizzo.value, email.value, telefono.value);
    this.obs.subscribe(this.getDataPosted);
    return false
  }
  getDataPosted = (pippo : {id : number}) => {
    if (pippo.id != undefined) {
      this.data.push(this.nuova);
    }
  }
  fooSSS(a: Prenotazione): boolean {
    this.nascondi = !this.nascondi;
    this.ciclo = a;
    return false
  }
}
