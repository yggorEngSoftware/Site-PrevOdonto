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
  dentistas: Dentista[];
  dent = new Dentista();

  constructor(private dentistaService: DentistaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      especialidade:[null],
      dent: [null]
    });
    this.dentistaService.findAll().subscribe(dados => this.dentistas = dados);
  }
  salvar() {
     console.log(this.formulario.value);
     console.log(this.dentista);
     this.dentistaService.salvarDentista(this.dentista).subscribe(console.log);
   }
   editar(){
    
    this.dentistaService.editarDentista(this.dent.id , this.dentista).subscribe(console.log);
  }
  excluir() {
    this.dentistaService.excluirDentista(this.dent.id).subscribe(console.log);
  }

}
