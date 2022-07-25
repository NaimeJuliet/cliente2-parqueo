import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ServicioCeldasService {

  constructor(public cliente:HttpClient) { 

    console.log("consumiendo el servicio")
  }

  buscarCeldas():Observable<any>{
    return this.cliente.get("https://serverparq.herokuapp.com/api/v1/parqueadero/celdas/")
  }

}
