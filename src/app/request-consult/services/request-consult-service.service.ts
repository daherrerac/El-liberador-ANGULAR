import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerOption = {
  headers: new HttpHeaders({ Accept: 'application/json' })
};
const url = "https://jsonplaceholder.typicode.com/users"; // reemplazar con la url del servicio

@Injectable({
  providedIn: 'root'
})
export class RequestConsultServiceService {

  constructor(private http: HttpClient) {}

  async getRequestStatus(documentNumber: number, requestNumber: number) {
    return this.http.get(url, headerOption)
      .toPromise()
      .then((response: any) => response)
      .catch(this.handlePromiseError)
  }

  handlePromiseError(error: any) {
    if(error.error?.emssage) throw {name: 'error', messsage: error.error.message};
    else if(error.error?.Response?.error?.error_user_msg) throw {name: 'warning', message: error.error.Response.error.error_user_msg};
    else if(error.error?.ERROR) throw {name: 'error', message: error.error.ERROR};
    else throw {name: 'error', message: 'Ocurrió un error inesperado, intentalo de nuevo', ...error};
  }
}
