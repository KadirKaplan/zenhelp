import { Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxScrollViewModule }  from 'devextreme-angular/ui/scroll-view';

@Component({
  selector: 'app-',
  templateUrl: './.component.html', 
  styleUrls: ['./.component.scss']
})
export class SingleCardComponent {
  constructor() { }
}

@NgModule({
  imports: [ CommonModule, DxScrollViewModule ],
  exports: [ SingleCardComponent ],
  declarations: [ SingleCardComponent ]
})
export class SingleCardModule { }
