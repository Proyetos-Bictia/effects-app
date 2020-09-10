import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/app.reducers';

import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []
  loading: boolean = false
  err: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.err = error
    })
    this.store.dispatch(cargarUsuarios())
  }

}
