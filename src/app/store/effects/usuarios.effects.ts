import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UsuarioService } from 'src/app/core/services/usuario.service';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from '../actions';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            mergeMap(
                () => this.usuarioService.getUsers()
                    .pipe(
                        map(usuarios => usuariosActions.cargarUsuariosSuccess({ usuarios })),
                        catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err })))
                    )
            )
        )
    );

}