import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  usuarios: FirebaseListObservable<any[]>;
  usuario: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af:AngularFire) {
  this.folder = "usuarioimagenes";
  }

  getUsuarios(){
  this.usuarios = this.af.database.list('/Users') as FirebaseListObservable<Usuario[]>
  return this.usuarios;
  }

  getUsuarioDetails(id){
  this.usuario = this.af.database.object('/Users/'+id) as FirebaseObjectObservable<Usuario>
  return this.usuario;
  }


  crearUsuario(usuario){
  // Create root ref
  let storageRef = firebase.storage().ref();
  for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
    let path = `/${this.folder}/${selectedFile.name}`;
    let iRef = storageRef.child(path);
    iRef.put(selectedFile).then((snapshot) => {
      usuario.image = selectedFile.name;
      usuario.path = path;

      return this.usuarios.push(usuario);
    });
  }
}

updateUsuario(id, usuario){

   return this.usuarios.update(id, usuario);
 }


  deleteUsuario(id){
    return this.usuarios.remove(id);
  }

}

  interface Usuario {
  $key?:string;
  nombre?:string;
  apellido?:string;
  image?:string;
  edad?:string;
  genero?:string;
  }
