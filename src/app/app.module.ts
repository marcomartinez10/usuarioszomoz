import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

export const firebaseConfig = {
  apiKey: "AIzaSyD5qfRGOmNHHMWj7COwKVk3kh4axNDv9i0",
  authDomain: "zomozusuarios.firebaseapp.com",
  databaseURL: "https://zomozusuarios.firebaseio.com",
  projectId: "zomozusuarios",
  storageBucket: "zomozusuarios.appspot.com",
  messagingSenderId: "882283274759"
};

const appRoutes: Routes = [
{path: '', component:HomeComponent},
{path: 'usuarios', component:UsuariosComponent},
{path: 'usuario/:id', component:UsuarioComponent},
{path: 'crear-usuario', component:CrearUsuarioComponent},
{path: 'editar-usuario/:id', component:EditarUsuarioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    NavbarComponent,
    UsuarioComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
