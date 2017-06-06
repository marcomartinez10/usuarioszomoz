import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
id:any;
usuario: any;
imageUrl:any;
  constructor(  private firebaseService: FirebaseService,
  private router:Router,
  private route:ActivatedRoute
  ) {



  }

  ngOnInit() {

  this.id = this.route.snapshot.params['id'];

  this.firebaseService.getUsuarioDetails(this.id).subscribe(usuario => {
  this.usuario = usuario;
  console.log(usuario);

  let storageRef = firebase.storage().ref();
  let spaceRef = storageRef.child(usuario.path);
  storageRef.child(usuario.path).getDownloadURL().then((url) =>  {
  this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      })
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteUsuario(this.id);

    this.router.navigate(['/usuarios']);
  }

}
