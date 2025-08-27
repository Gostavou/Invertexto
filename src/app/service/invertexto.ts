import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Invertexto {
  private _token: string ='21234|pva5aOXiiL7IUvwSkSdHh9iRaB6PQ6R7';

  constructor(private http: HttpClient){}

  getPessoa(): Observable<any>{
    const url = `https://api.invertexto.com/v1/faker?token=${this._token}&fields=name,cpf&locale=pt_BR`
    return this.http.get<any>(url).pipe(
      catchError((error)=>{
        console.error('Erro na requisição', error);
        return throwError(()=> new Error('Erro ao buscar os dados'));
      })
    );
  }

  getByCep(cep: string): Observable<any>{
    const url = `https://api.invertexto.com/v1/cep/${cep}?token=${this._token}`;
    return this.http.get<any>(url).pipe(
      catchError((error)=>{
        console.error('Erro na requisição', error);
        return throwError(()=> new Error('Erro ao buscar os dados'));
      })
    );
    }

    getByCnpj(cnpj: string): Observable<any>{
    const url = `https://api.invertexto.com/v1/cnpj/${cnpj}?token=${this._token}`;
    return this.http.get<any>(url).pipe(
      catchError((error)=>{
        console.error('Erro na requisição', error);
        return throwError(()=> new Error('Erro ao buscar os dados'));
      })
    );
    }
  
}
