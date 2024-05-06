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
  title = 'lotorto2';
  data !: Prenotazione[];
  obs !: Observable<Prenotazione[]>;
  nascondi: boolean = false;
  ciclo !: Prenotazione;
  tempPren!: Prenotazione;
  o !: Observable<{ id: number }>;
  constructor(private http: HttpClient) {
    this.obs = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking');
    this.obs.subscribe(this.getData);
  }
  getData = (d: Prenotazione[]) => {
    this.data = d;
  }
  prenota(n: HTMLInputElement, c: HTMLInputElement, i: HTMLInputElement, t: HTMLInputElement, e: HTMLInputElement, dP: HTMLInputElement, oP: HTMLInputElement): boolean {
    let dati = JSON.stringify({
      "nome": n.value,
      "cognome": c.value,
      "data": dP.value,
      "ora": oP.value,
      "indirizzo": i.value,
      "email": e.value,
      "telefono": t.value
    });
    this.o = this.http.post<{ id: number }>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking', dati);
    this.o.subscribe(this.getDataPosted);
    this.tempPren = new Prenotazione(n.value, c.value, dP.value, oP.value, i.value, e.value, t.value)
    return false
  }
  getDataPosted = (p: { id: number }) => {
    console.log(p);
    // this.dataPosted = p;
    if (p.id != undefined) {
      this.data.push(this.tempPren);
    }
  }
  fooSSS(f: Prenotazione): boolean {
    this.nascondi = !this.nascondi;
    this.ciclo = f;
    return false
  }
}
