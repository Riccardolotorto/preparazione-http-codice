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
  nascondi : boolean = false;
  fooSS : boolean = false;
  constructor(private http: HttpClient) {
    this.o = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http/booking');
    this.o.subscribe(this.getData);
  }
  getData = (d : Prenotazione[]) => {
    this.data = d;
  }
  mostra(): boolean {
    this.nascondi = !this.nascondi;
    return false
  }
  foosss(): boolean {
    this.fooSS = !this.fooSS;
    return false
  }
}
