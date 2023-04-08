import { Component ,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() data : any;
  @Output() onSelection = new EventEmitter<any>();
  prj:any;
  p:any
  uniqueproj:any;
  selectedproj:any;


  onProject(value: any) {
    this.p = this.data.filter((e:any)=>{
      return e.project_name == value;
    })
   this.prj = this.p;
    this.onSelection.emit(this.prj);
    
  }

  uniqueProject(){
    this.uniqueproj =Array(... new Set(this.data.map((e:any)=>{
      return e.project_name
    })))
    this.selectedproj = this.uniqueproj
  return this.uniqueproj;
  }
}
