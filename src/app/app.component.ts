import { Component, OnInit, ViewChild } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('inplace_editor')
  public inplaceObj: InPlaceEditorComponent;
  public overviewModel: object;
  public settings: object;

  ngOnInit(): void {
    this.overviewModel = {
        placeholder: 'Enter employee name'
    };
    this.settings = {
        title: 'Enter Employee Name'
    };
  }
}
