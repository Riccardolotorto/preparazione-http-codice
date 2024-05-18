import { Component, Input } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  @Input() mostra!: Prenotazione;
}
