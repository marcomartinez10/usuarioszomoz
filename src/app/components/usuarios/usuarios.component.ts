import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios:any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  this.firebaseService.getUsuarios().subscribe(usuarios => {
  console.log("hola");
  console.log(usuarios);
  this.usuarios = usuarios;
  })
  }

}
