import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api, anime } from 'src/interface/api';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  i = 1;
  anime = [];
  animeBS = new BehaviorSubject([]);
  animeComplete = new BehaviorSubject(false);
  constructor(public https: HttpClient) {
    this.animeBS.subscribe((data: anime []) => {
      this.anime = data;
    });
  }



  getAnimeByUser(username, listType, type, filters) {
    
    return this.https
    .post(`${environment.apiBackend}mal/random_mal`, {username, listType, type, filters})
  }

  numberedCall(username, listType, type, page) {
    return new Promise((resolve, reject) => {
      this.https
        .get(`${environment.api}/user/${username}/${listType}/${type}/${page}`)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getResult(id=1,type='anime'){
    console.log(id, type)
    return new Promise((resolve, reject) => {
      this.https.get(`${environment.api}/${type}/${id}`).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          reject(error);
        })
    })
  }
}
