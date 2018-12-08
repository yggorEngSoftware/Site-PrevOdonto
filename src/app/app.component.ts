import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prev-Odonto';

  constructor(private router: Router){}

  LogCadCliente(){
    this.router.navigate(['cadastroCliente']);
  }
  LogCadDentista(){
    this.router.navigate(['cadastroDentista']);
  }
  LogCadAtendimento(){
    this.router.navigate(['cadastroAtendimento']);
  }
  LogListaAtendimento(){
    this.router.navigate(['listagemAtendimento']);
  }
}
