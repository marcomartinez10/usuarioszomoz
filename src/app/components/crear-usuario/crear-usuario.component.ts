import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
Nombre:any;
Apellido:any;
Edad:any;
Genero:any;
image:any;

  constructor(
  private firebaseService:FirebaseService,
  private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
  console.log("hola");

  let usuario = {
  Nombre: this.Nombre,
  Apellido: this.Apellido,
  Edad: this.Edad,
  Genero: this.Genero
  }

  this.firebaseService.crearUsuario(usuario);

  this.router.navigate(['usuarios']);

  }

}
