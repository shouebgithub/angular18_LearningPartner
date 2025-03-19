import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients ():Observable<APIResponseModel> {
return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT)
  }
  GetAllEmployee ():Observable<APIResponseModel> {
return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP)
  }
  getAllClientProject ():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT)
      }
  AddUpdateClient (obj:Client):Observable<APIResponseModel> {
return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj)
  }
  DeleteClientByClientId (id:number):Observable<APIResponseModel> {
return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }
  AddClientProjectUpdate (obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj)
      }
}
