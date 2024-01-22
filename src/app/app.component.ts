import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  lodar:boolean = false;
  constructor(
    private apiService:ApiService
  ){}
  ngOnInit(): void {
    this.apiService.loding.subscribe(res=> {
      this.lodar = res
    })
  }
}
