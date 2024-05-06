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
  constructor(private http: HttpClient) {
    this.risposta = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking');
    this.risposta.subscribe(this.getData);
  }
  getData = (dati: Prenotazione[]) => {
    this.data = dati;
  }
  prenota(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement): boolean {

    return false
  }
  fooSSS(f: Prenotazione): boolean {
    this.nascondi = !this.nascondi;
    return false
  }
}
