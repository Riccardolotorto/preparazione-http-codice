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
  constructor(private http: HttpClient) {
    this.o = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking');
    this.o.subscribe(this.getData);
  }
  getData = (d : Prenotazione[]) => {
    this.data = d;
  }
  prenota(n: HTMLInputElement, c: HTMLInputElement, i: HTMLInputElement, t: HTMLInputElement, e: HTMLInputElement, dP: HTMLInputElement, oP: HTMLInputElement): boolean {
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
    return false
  }
  getDataPosted = (p: Prenotazione) => {
    this.nonArrayData = p;
  }
  foosss(): boolean {
    this.fooSS = !this.fooSS;
    return false
  }
}
