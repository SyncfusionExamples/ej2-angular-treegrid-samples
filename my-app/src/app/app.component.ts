import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks' height="350">
             <e-columns>                   
               <e-column field='taskID' headerText='Task ID' textAlign='Right' width=70></e-column>                    
               <e-column field='taskName' headerText='Task Name' textAlign='Left' width=200></e-column>                    
               <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>                    
               <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>                
             </e-columns>    
           </ejs-treegrid>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

public data: Object[];

ngOnInit(): void {
this.data = sampleData;
}
}