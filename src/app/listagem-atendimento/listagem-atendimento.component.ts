import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/service/atendimento.service';
import { Atendimento } from 'src/Model/Atendimento';

export interface Atendimentos {
  
  dataAtendimento: String;
  servico: String;
  estado: String;
  estadoString: String;
  clienteId: String;
  dentistaId: String;
  nomeCliente: String;
  nomeDentista: String;
  cpfDentista: String;
}
@Component({
  selector: 'app-listagem-atendimento',
  templateUrl: './listagem-atendimento.component.html',
  styleUrls: ['./listagem-atendimento.component.css']
})
export class ListagemAtendimentoComponent implements OnInit {

  
  constructor(private atendimentoService: AtendimentoService) { }
  
  
  dataSource: Atendimento[];
  displayedColumns: string[] = ['dataAtendimento', 'servico','estadoString',
   'nomeCliente', 'nomeDentista'];
  
  
  ngOnInit() {
    this.atendimentoService.findAll().subscribe(dados => this.dataSource = dados);
    
  }
  listar(){
    
    console.log(this.dataSource.values.toString); 
  }
}
