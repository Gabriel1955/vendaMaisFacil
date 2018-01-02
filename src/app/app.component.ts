import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //usuario para teste, futuramente login eve ser feito pelo service
  usuario = {
    nome:"Gabriel Paulino Farias da Silva",
    usuario:"gabriel123",
    senha:"gabriel123"
  }
  constructor(){


  }
  isToggled: boolean = false;
  toggle() {
    this.isToggled = !this.isToggled;
  }

  

}
