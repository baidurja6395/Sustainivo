import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Subject, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = "http://164.52.212.73:3001/api/v1";
  loding:Subject<boolean>= new Subject()
  constructor(
    private http: HttpClient,
  ) { }

  showLoder(){
    this.loding.next(true)
  }
  hideLoder(){
    this.loding.next(false)
  }

   post(path:string, data:any,noLoder?:boolean){
    path = `${this.BASE_URL}/${path}`
    return this.http.post<any>(`${path}`, data)
  }
   put(path:string, data:any,noLoder?:boolean){
    path = `${this.BASE_URL}/${path}`
    return this.http.put<any>(`${path}`, data)
  }

   get(path:any,noLoder?:boolean){
    return this.http.get<any>(path)
  }

   delete(path:string,data:any,noLoder?:boolean){
    path = `${this.BASE_URL}/${path}`
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete<any>(`${path}`,options)
  }

   uploadDoc(file:File,noLoder?:boolean){
    const path = `${this.BASE_URL}/product/upload`
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(`${path}`, formData)
  }
}
