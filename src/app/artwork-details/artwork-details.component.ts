import { Component, OnInit, Input } from '@angular/core';
import { Artwork } from '../_models/artwork.model';
import { ArtworksService } from '../_services/artworks.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {

  artwork: Artwork;

  constructor(  private route: ActivatedRoute, private router: Router, private service: ArtworksService) { }

  ngOnInit() {

    var title;
    this.route.paramMap.subscribe(param => { title = param.get('title'); });

    this.artwork = this.service.getArtwork(title);

  }

  transform(str) {

    var str_new = str.replace("-", " ");
    console.log(str);

    return str_new;
  }

}
