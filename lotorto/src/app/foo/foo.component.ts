import { Component } from '@angular/core';
import { Foo } from './foo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  dataPosted !: Foo;
  obs !: Observable<Foo>;
  constructor(private http: HttpClient) {
    let posted = JSON.stringify({"indirizzo": "via grassi 22",
    "email": "ric@gmail.com",
    "telefono": "1234"});
    const headers = { 'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.obs = this.http.post<Foo>('https://my-json-server.typicode.com/Riccardolotorto/preparazione-http', posted, {headers});
    this.obs.subscribe(this.getDataPosted);
  } 
  getDataPosted = (d : Foo) => {
    this.dataPosted = d;
    console.log(this.dataPosted);
  } 
}
