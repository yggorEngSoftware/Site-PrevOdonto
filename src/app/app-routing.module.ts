import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroDentistaComponent } from './cadastro-dentista/cadastro-dentista.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';


const routes: Routes = [
  {path: 'cadastroCliente', component: CadastroClienteComponent},
  {path: 'cadastroDentista', component: CadastroDentistaComponent},
  {path: 'cadastroAtendimento', component: CadastroAtendimentoComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
