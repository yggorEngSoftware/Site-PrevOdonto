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
  clientes: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
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

}
