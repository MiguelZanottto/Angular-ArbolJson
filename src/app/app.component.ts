import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comunidades: any;
  comunidadSelected: any;
  provinciaSelected: any;
  localidadSelected: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("/assets/arbol.json").subscribe(
      (resultado: any) => {
        this.comunidades = resultado;
      }
    );
  }

  onComunidadChange() {
    this.provinciaSelected = null; 
    this.localidadSelected = null; 
  }

  onProvinciaChange() {
    this.localidadSelected = null;
  }
}