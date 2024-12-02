import { Injectable } from '@angular/core';
import * as movieArt from 'movie-art';

import { Programme } from '../models/programme';

@Injectable({ providedIn: 'root' })
export class MovieArtService {
  getArt(programme: Programme): Programme {
    movieArt(programme.name).then((response: any): void => {
      if (typeof response === 'string') {
        programme.art = response;
      } else {
        programme.art = 'https://placehold.co/400x600.png?text=No+Artwork+Available';
      }
    }).error((): void => {
      console.log('Error fetching movie art');
    });
    return programme;
  }
}
