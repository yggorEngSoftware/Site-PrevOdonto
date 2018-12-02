import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Dentista } from "src/Model/Dentista";

@Injectable({
    providedIn: 'root'
})
export class DentistaService{
 constructor(public http: HttpClient){
 }
 private readonly API = 'https://prev-odonto.herokuapp.com/dentistas';

 findAll(){
     return this.http.get<Dentista[]>(`${this.API}`);
 }
 salvarDentista(d: Dentista){
    
     return this.http.post(`${this.API}`, d);
 }
}