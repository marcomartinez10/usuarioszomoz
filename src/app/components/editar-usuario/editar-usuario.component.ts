import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id;
  Nombre;
  Apellido;
  Edad;
  Genero;



  constructor(
  private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
  this.id = this.route.snapshot.params['id'];

this.firebaseService.getUsuarioDetails(this.id).subscribe(usuario => {
this.Nombre = usuario.Nombre;
this.Apellido = usuario.Apellido;
this.Edad = usuario.Edad;
this.Genero = usuario.Genero;

  });
}
onEditSubmit(){
  let usuario = {
      Nombre: this.Nombre,
      Apellido: this.Apellido,
      Edad: this.Edad,
      Genero: this.Genero
  }

    debugger;
    this.firebaseService.updateUsuario(this.id, usuario);

    this.router.navigate(['/usuarios']);
  }

}
