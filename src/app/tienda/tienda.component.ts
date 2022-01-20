import { Component, OnInit } from '@angular/core';
import { Tienda } from '../models/tienda';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  private ServiceUrl = "https://localhost:44385/api/Tienda"; 
  tienda: Tienda[] = [];
  constructor(private http: HttpClient) { }

  public getTienda(): Observable<any> {
    return this.http.get(this.ServiceUrl);
  }

  ngOnInit(): void {
    //this.tienda = this.getTienda();
  }

}
