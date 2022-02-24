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



  async getAnimeByUser(username, listType, type) {
    const interval = setInterval(async () => {
      const data: Api = await this.numberedCall(
        username,
        listType,
        type,
        this.i
      );
      console.log(this.anime);
      switch (listType) {
        case 'animelist':
          if (!data.anime.length) {
            clearInterval(interval);
            this.i = 1;
            this.anime = [];
            this.animeComplete.next(true);
          } else {
            this.animeBS.next([...this.anime, ...data.anime]);
            this.i++;
          }
          break;
        case 'mangalist':
          if (!data.manga.length) {
            clearInterval(interval);
            this.i = 1;
            this.anime = [];
            this.animeComplete.next(true);
          } else {
            this.animeBS.next([...this.anime, ...data.manga]);
            this.i++;
          }
          break;
        default:
          break;
      }

    }, 3000);
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
