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
  title = 'lotortoNoBoot';
  pippus!: Prenotazione[];
  obs!: Observable<Prenotazione[]>;
  nascondi: boolean = false;
  tern!: Prenotazione;
  obb!: Observable<{id: number}>;
  ciclo!: Prenotazione;
  constructor(private http: HttpClient) {
    this.obs = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking');
    this.obs.subscribe(this.getData);
  }
  getData = (d: Prenotazione[]) => {
    this.pippus = d;
  }
  prenota(nome: HTMLInputElement, cognome: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement, indirizzo: HTMLInputElement, email: HTMLInputElement, telefono: HTMLInputElement) : boolean{
    let posted = JSON.stringify({
      "nome": nome.value,
      "cognome": cognome.value,
      "data": data.value,
      "ora": ora.value,
      "indirizzo": indirizzo.value,
      "email": email.value,
      "telefono": telefono.value
    });
    this.obb = this.http.post<{id: number}>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking', posted);
    this.obb.subscribe(this.getDataPosted);
    this.tern = new Prenotazione(nome.value, cognome.value, data.value, ora.value, indirizzo.value, email.value, telefono.value);
    return false
  }
  getDataPosted = (ciao: {id: number}) => {
    if (ciao.id != undefined) {
      this.pippus.push(this.tern);
    }
  }
  mostra(pipp: Prenotazione): boolean {
    this.nascondi = !this.nascondi;
    this.ciclo = pipp;
    return false
  }
}
