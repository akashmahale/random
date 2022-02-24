export interface Api {
  request_hash?: string;
  request_cached?: boolean;
  request_cache_expiry?: number;
  anime?: anime[];
  manga?: manga[];
}

export interface anime {
    mal_id?: number;
    title?: string;
    video_url?: string;
    url?: string;
    image_url?: string;
    type?: string;
    watching_status?: number;
    score?: number;
    watched_episodes?: number;
    total_episodes?: number;
    airing_status?: number;
    season_name?: string;
    season_year?: number;
    has_episode_video?: false;
    has_promo_video?: true;
    has_video?: true;
    is_rewatching?: false;
    tags?: null;
    rating?: string;
    start_date?: Date;
    end_date?: Date;
    watch_start_date?: null;
    watch_end_date?: null;
    days?: null;
    storage?: null;
    priority?: string;
    added_to_list?: false;
    studios?: [
      {
        mal_id?: number;
        type?: string;
        name?: string;
        url?: string
      }
    ];
    licensors?: [
      {
        mal_id?: number;
        type?: string;
        name?: string;
        url?: string
      }
    ];
  }

export interface manga {
  mal_id?: number;
  title?: string;
  url?: string;
  image_url?: string;
  type?: string;
  score?: number;
  read_chapters?: number;
  read_volumes?: number;
  total_chapters?: number;
  total_volumes?: number;
  publishing_status?: number;
  is_rereading?: boolean;
  tags?: null;
  start_date?: Date;
  end_date?: null;
  read_start_date?: null;
  read_end_date?: null;
  days?: null;
  retail?: null;
  priority?: string;
  added_to_list?: boolean;
  magazines?: []; }

export interface results {
  mal_id?: string;
  url?: string;
  image_url?: string;
  title?: string;
  title_english?: string;
  type?: string;
  episodes?: number;
  read_chapters?: number;
  watched_episodes?: number;
  chapters?: number;
  score?: number;
  my_score?: number;
  members?: number;
  rank?: number;
  popularity?: number;
  premiered?: string;
  studios?:{
    name?: string
  };
  genres?:{
    name?: string
  };
  authors?:{
    name?: string
  };
  }
