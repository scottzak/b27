import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  
  @Input() tnum: number;
  @Input() imagePath: string;

  constructor() {

  }

  ngOnInit() {
  }

}
