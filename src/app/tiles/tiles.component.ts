import { Component, OnInit } from '@angular/core';
import { DragScrollModule } from '../../../node_modules/ngx-drag-scroll';
import { TileComponent } from '../tile/tile.component';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})

export class TilesComponent implements OnInit {

  tiles = [ 
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png'
  ];
  
  getColor(i) {
    let baseColor = 0x309030;
    let color = '#' + (baseColor + (i * 0x101010)).toString(16);
    return color;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
