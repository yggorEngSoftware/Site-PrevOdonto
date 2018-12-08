import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroDentistaComponent } from './cadastro-dentista/cadastro-dentista.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteService } from 'src/service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DentistaService } from 'src/service/dentista.service';
import {MatSelectModule} from '@angular/material/select';
import { AtendimentoService } from 'src/service/atendimento.service';
import { ListagemAtendimentoComponent } from './listagem-atendimento/listagem-atendimento.component';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    CadastroDentistaComponent,
    CadastroAtendimentoComponent,
    ListagemAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule
  ],
  providers: [ClienteService,
    DentistaService, AtendimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
