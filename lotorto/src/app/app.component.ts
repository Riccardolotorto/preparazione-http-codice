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
  title = 'lotorto';
  data !: Prenotazione[];
  o !: Observable<Prenotazione[]>;
  fooSS : boolean = false;
  nonArrayData !: Prenotazione;
  obs !: Observable<Prenotazione>;
  ciclo !: Prenotazione;
  constructor(private http: HttpClient) {
    this.o = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking');
    this.o.subscribe(this.getData);
  }
  getData = (d : Prenotazione[]) => {
    this.data = d;
  }
  prenota(n: HTMLInputElement, c: HTMLInputElement, dP: HTMLInputElement, oP: HTMLInputElement, i: HTMLInputElement, e: HTMLInputElement, t: HTMLInputElement): boolean {
    let posted = JSON.stringify({
      "nome": n.value,
      "cognome": c.value,
      "data": dP.value,
      "ora": oP.value,
      "indirizzo": i.value,
      "email": e.value,
      "telefono": t.value
    });
    console.log(posted);
    this.obs = this.http.post<Prenotazione>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking', posted);
    this.obs.subscribe(this.getDataPosted);
    this.data.push(new Prenotazione(n.value, c.value, dP.value, oP.value, i.value, e.value, t.value));
    return false
  }
  getDataPosted = (p: Prenotazione) => {
    this.nonArrayData = p;
  }
  fooSSS(f: Prenotazione): boolean {
    this.fooSS = !this.fooSS;
    this.ciclo = f;
    return false
  }
}
