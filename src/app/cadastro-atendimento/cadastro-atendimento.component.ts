import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/Model/Cliente';
import { Dentista } from 'src/Model/Dentista';
import { ClienteService } from 'src/service/cliente.service';
import { DentistaService } from 'src/service/dentista.service';
import { Atendimento } from 'src/Model/Atendimento';
import { AtendimentoService } from 'src/service/atendimento.service';

export interface estado {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.css']
})
export class CadastroAtendimentoComponent implements OnInit {
  formulario: FormGroup;
  client: Cliente[];

  atendimentoEdit: Atendimento[];

  atendi = new Atendimento();

  dentistas: Dentista[];

  atendimento = new Atendimento();

  message;
  exibeMsg;

  estados: estado[] = [
    { valor: '1', viewValor: 'Pendente para o Atendimento' },
    { valor: '2', viewValor: 'Paciente Atendido' },
    { valor: '3', viewValor: 'Atrasado para o Atendimento' },
    { valor: '4', viewValor: 'Cancelado para o Atendimento' },
    { valor: '5', viewValor: 'Em Atendimento' }
    //colocar "em atendimento"
  ];

  constructor(private clienteService: ClienteService,
    private dentistaService: DentistaService,
    private atendimentoService: AtendimentoService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      clienteId: [null],
      dentistaId: [null],
      dataAtendimento: [null],
      servico: [null],
      estado: [1],
      atendimentoEdit: [null]
    });
    this.clienteService.findAll().subscribe(dados => this.client = dados);
    this.dentistaService.findAll().subscribe(dados => this.dentistas = dados);
    this.atendimentoService.findAll().subscribe(dados => this.atendimentoEdit = dados);
  }
  salvar() {

    console.log(this.formulario.value);
    console.log(this.atendimento);
    this.atendimentoService.salvarAtendimento(this.atendimento).subscribe(console.log);
    this.atendimento = new Atendimento();

    this.message = 'Salvo com sucesso.';
    this.exibeMsg = true;
    this.timeMsg();
  }
  editar() {

    this.atendimentoService.editarAtendimento(this.atendi.id, this.atendimento).subscribe(console.log);
  }
  excluir() {
    this.atendimentoService.excluirAtendimento(this.atendi.id).subscribe(console.log);
  }

  setAtrasado() {
    this.atendi.estado = "3";
    console.log(this.atendi);
    this.atendimentoService.editarAtendimento(this.atendi.id, this.atendi).subscribe(console.log);
  }
  setCheckin(){
    this.atendi.estado = "6";
    console.log(this.atendi);
    this.atendimentoService.editarAtendimento(this.atendi.id, this.atendi).subscribe(console.log);

  }

  setEmAtendimento(){
    this.atendi.estado = "5";
    console.log(this.atendi);
    this.atendimentoService.editarAtendimento(this.atendi.id, this.atendi).subscribe(console.log);
  }

  timeMsg() {
    setTimeout(function () {
      this.exibeMsg = false;
    }, 2000);
  }

}
