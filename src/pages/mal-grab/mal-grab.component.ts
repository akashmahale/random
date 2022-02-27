import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
// import { anime, results } from 'src/interface/api';

@Component({
  selector: 'app-mal-grab',
  templateUrl: './mal-grab.component.html',
  styleUrls: ['./mal-grab.component.css']
})
export class MalGrabComponent implements OnInit {
  loading = false;
  checkListFilter = [
    { name: 'All', id: '7' },
    { name: 'Watching', id: '1', type: 'animelist' },
    { name: 'Reading', id: '1', type: 'mangalist' },
    { name: 'Completed', id: '2' },
    { name: 'On Hold', id: '3' },
    { name: 'Dropped', id: '4' },
    { name: 'Plan to Watch', id: '6', type: 'animelist' },
    { name: 'Plan to Read', id: '6', type: 'mangalist' }
  ];
  checkListType = [
    { id: 'tv', name: 'TV', type: 'animelist' },
    { id: 'manga', name: 'Manga', type: 'mangalist' },
    { id: 'ova', name: 'OVA', type: 'animelist' },
    { id: 'novel', name: 'Novel', type: 'mangalist' },
    { id: 'movie', name: 'Movie', type: 'animelist' },
    { id: 'oneshot', name: 'Oneshot', type: 'mangalist' },
    { id: 'special', name: 'Special', type: 'animelist' },
    { id: 'doujin', name: 'Doujin', type: 'mangalist' },
    { id: 'ona', name: 'ONA', type: 'animelist' },
    { id: 'manhwa', name: 'Manhwa', type: 'mangalist' },
    { id: 'music', name: 'Music', type: 'animelist' },
    { id: 'manhua', name: 'Manhua', type: 'mangalist' },
    { name: 'Unknown', id: 'unknown', type: 'animelist' }
  ];
  checkListCat = [
    { name: 'Anime', id: 'animelist' },
    { name: 'Manga', id: 'mangalist' }
  ];
  checkListFilterSelection = this.checkListFilter[0];
  checkListTypeSelection = [];
  checkListCatSelection = this.checkListCat[0];
  malUsername = '';
  animeList = [];
  anime: any = {};
  constructor(public api: ApiService) {
  }
  s;

  ngOnInit() {
    this.api.animeComplete.subscribe(data => {
      if (data === true) {
        this.randomFilterAnime();
      }
    });
    this.api.animeBS.subscribe(data => {
      this.animeList = data;
    });
    const malUsername = localStorage.getItem('mal');
    malUsername !== null ? (this.malUsername = malUsername) : '';
  }

  async getAnime() {
    this.anime = {};
    if (!this.animeList.length) {
      this.loading = true;
      this.api.getAnimeByUser(this.malUsername,
        this.checkListCatSelection.id,
        this.checkListFilterSelection.id,this.checkListTypeSelection.map(d => d.id.toLowerCase())).subscribe((data: any) => {
          this.loading = false;
          this.animeList = data;
          this.randomFilterAnime();
        })
      localStorage.setItem('mal', this.malUsername);
    } else {
      this.randomFilterAnime();
    }
  }
  checkListFilterSelect(action) {
    this.animeList = [];
    this.checkListFilterSelection = action;
  }

  checkListCatSelect(action) {
    this.animeList = [];
    this.checkListTypeSelection = [];
    console.log(this.checkListFilterSelection.type, action.id);
    this.checkListFilterSelection.type === undefined
      ? null
      : (this.checkListFilterSelection = this.checkListFilter[0]);
    this.checkListCatSelection = action;
  }

  async randomAnime(fiteredList) {
    this.anime = {};
    console.log(fiteredList);
    const min = 0;
    const max = fiteredList.length - 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const result = fiteredList[randomNumber]
    if(result == undefined){
      alert("None matches Filters")
      this.loading = false;
      return;
    }
    this.anime = result
    this.loading = false;
  }

  showButtons(action) {
    return action.type === this.checkListCatSelection.id || action.type == null
      ? null
      : 'none';
  }

  checkListTypeSelect(action, event) {
    this.animeList = [];
    if (event.target.checked) {
      this.checkListTypeSelection.push(action);
    } else {
      const id = this.checkListTypeSelection.map(e => e.id).indexOf(action.id);
      this.checkListTypeSelection.splice(id, 1);
    }
    console.log(this.checkListTypeSelection, event);
  }

  randomFilterAnime() {
    this.randomAnime(this.animeList);
  }

  async openWindow() {
    const win = await window.open(`https://myanimelist.net${this.anime['anime_url'] || this.anime['manga_url']}`, '_blank');
    win.focus();
  }
}
