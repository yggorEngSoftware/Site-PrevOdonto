import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/service/cliente.service';
import { Cliente } from 'src/Model/Cliente';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  formulario: FormGroup;
  cliente = new Cliente();
  client: Cliente[];
  cli = new Cliente();
  constructor(private service: ClienteService, private formBuilder: FormBuilder) { }
  
  onSubmit() {
    console.log(this.formulario.value);

  }
  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      cli: [null]
    });
    this.service.findAll().subscribe(dados => this.client = dados);
  }
  salvar() {
    console.log(this.cli);
    console.log(this.formulario.value);
    console.log(this.cliente);
    this.service.salvarCliente(this.cliente).subscribe(console.log);
  }
  editar(){
    
    this.service.editarCliente(this.cli.id , this.cliente).subscribe(console.log);
  }
  excluir() {
    this.service.excluirCliente(this.cli.id).subscribe(console.log);
  }

}
