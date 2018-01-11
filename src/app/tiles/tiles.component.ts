import { Component, OnInit } from '@angular/core';
import { DragScrollModule } from '../../../node_modules/ngx-drag-scroll';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})

export class TilesComponent implements OnInit {

  tiles = [ 
    1, 2, 3, 4, 5, 6
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
