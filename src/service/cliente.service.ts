import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "src/Model/Cliente";

@Injectable({
    providedIn: 'root'
})
export class ClienteService{
 constructor(public http: HttpClient){
 }
 private readonly API = 'https://prev-odonto.herokuapp.com/clientes';

 findAll(){
     return this.http.get<Cliente[]>(`${this.API}`);
 }
 salvarCliente(c: Cliente){
     return this.http.post(`${this.API}`, c);
 }

 editarCliente(id: String, cli: Cliente){
     return this.http.put(`${this.API}/${id}`, cli);
 }
 
 excluirCliente(id: String){
     return this.http.delete(`${this.API}/${id}`);
 }
}