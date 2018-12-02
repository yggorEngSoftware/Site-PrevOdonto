import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Dentista } from 'src/Model/Dentista';
import { DentistaService } from 'src/service/dentista.service';
@Component({
  selector: 'app-cadastro-dentista',
  templateUrl: './cadastro-dentista.component.html',
  styleUrls: ['./cadastro-dentista.component.css']
})
export class CadastroDentistaComponent implements OnInit {

  formulario: FormGroup;
  dentista = new Dentista();
  constructor(private dentistaService: DentistaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      especialidade:[null]
    });
  }
  salvar() {
     console.log(this.formulario.value);
     console.log(this.dentista);
     this.dentistaService.salvarDentista(this.dentista).subscribe(console.log);
   }

}
