import { Component,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {

  @Input() data : any;
  @Output() onSelectionstory = new EventEmitter<any>();

  onStory(value: any) {
    this.onSelectionstory.emit(value);
  }

}
