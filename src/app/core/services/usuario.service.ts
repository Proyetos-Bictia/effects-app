import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.base_url

  constructor(private http: HttpClient) { }

  getUsers() {
    const urlFinal = `${this.url}/users?delay=3`
    return this.http.get(urlFinal)
    .pipe(
      map((results) => results['data'])
    )
  }

  getUserById(id: string) {
    const urlFinal = `${this.url}/users/${id}`
    return this.http.get(urlFinal)
    .pipe(
      map((results) => results['data'])
    )
  }
}
