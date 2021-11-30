import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <button kendoButton *ngIf="!opened" (click)="openClose(true)">Open</button>

      <iframe width="500px" height="500px"></iframe>
      
      <kendo-window [(top)]="windowTop" [(left)]="windowLeft" title="Status" *ngIf="opened" (close)="openClose(false)">
        <p style="text-align: center;">Successful!	<img src="https://www.bing.com/sa/simg/maps_opengraph.png"
        width="200" height="200"></p>
      </kendo-window>
    `
})
export class AppComponent {
    public windowTop: number = 100;
    public windowLeft: number = 50;
    public opened: boolean = true;

    public openClose(isOpened: boolean) {
      this.opened = isOpened;
    }
}
