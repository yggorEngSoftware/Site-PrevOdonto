import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Atendimento } from "src/Model/Atendimento";

@Injectable({
    providedIn: 'root'
})
export class AtendimentoService{
 constructor(public http: HttpClient){
 }
 private readonly API = 'https://prev-odonto.herokuapp.com/atendimentos';

 findAll(){
     return this.http.get<Atendimento[]>(`${this.API}`);
 }
 salvarAtendimento(a: Atendimento){
    
     return this.http.post(`${this.API}`, a);
 }
 
 editarAtendimento(id: String, aten: Atendimento){
    return this.http.put(`${this.API}/${id}`, aten);
}

excluirAtendimento(id: String){
    return this.http.delete(`${this.API}/${id}`);
}
}