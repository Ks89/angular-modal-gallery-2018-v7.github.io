import { Component, OnInit } from '@angular/core';

import { TitleService } from '../../core/services/title.service';
import { Metadata, UiService } from '../../core/services/ui.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: 'demo.html'
})
export class DemoComponent implements OnInit {

  title = 'Modal Gallery';

  constructor(private uiService: UiService,
              private titleService: TitleService) {
    this.titleService.titleEvent.subscribe((val: string) => {
      this.onUpdateTitle(val);
    });
  }

  onUpdateTitle(event: string) {
    this.title = event;
  }

  ngOnInit() {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData(<Metadata>{
      title: 'Demo'
    });
  }
}
