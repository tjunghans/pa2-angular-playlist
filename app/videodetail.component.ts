import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import { Video } from './video';

@Component({
  selector: 'video-detail',
  templateUrl: 'app/videodetail.component.html'
})
export class VideoDetailComponent {
  @Input() video:Video;
  @Output() closeForm: EventEmitter = new EventEmitter()
 
  private editTitle: boolean = false;
  private url: SafeResourceUrl;
  private sanitizer: DomSanitizationService

  constructor(sanitizer: DomSanitizationService) {
    this.sanitizer = sanitizer;
    this.url = sanitizer.bypassSecurityTrustResourceUrl('http://www.example.com');
  }
 
  onTitleClick() {
    this.editTitle = true;
  }

  onButtonOkClick() {
    this.closeForm.next({});
  }

  updateVideoUrl() {

  }

  ngOnChanges() {
    this.editTitle = false;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }
} 