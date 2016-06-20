import { Component, EventEmitter } from '@angular/core';
import { Video } from './video';

@Component({
  selector: 'video-list',
  templateUrl: 'app/videolist.component.html',
  inputs: ['videos'],
  outputs: ['selectVideo']
})
export class VideoListComponent {
  selectVideo = new EventEmitter();
  onSelect(vid: Video) {
    console.log(JSON.stringify(vid));
  }
}