import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from './usuario/usuario.component';
import { ListaComponent } from './lista/lista.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [UsuarioComponent, ListaComponent],
  exports: [
    UsuarioComponent, ListaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class UsuariosModule { }
