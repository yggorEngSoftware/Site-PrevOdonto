import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroDentistaComponent } from './cadastro-dentista/cadastro-dentista.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentoComponent } from './listagem-atendimento/listagem-atendimento.component';


const routes: Routes = [
  {path: 'cadastroCliente', component: CadastroClienteComponent},
  {path: 'cadastroDentista', component: CadastroDentistaComponent},
  {path: 'cadastroAtendimento', component: CadastroAtendimentoComponent},
  {path: 'listagemAtendimento', component: ListagemAtendimentoComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
