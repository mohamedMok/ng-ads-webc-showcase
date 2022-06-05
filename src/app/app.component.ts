import { Component } from '@angular/core';
import '@mozaic-ds/mozaic-web-components/public/adeo/bundle.js';
import '@mozaic-ds/mozaic-web-components/public/icons.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggleCheck = true;
  checkboxValue = true;
  inputNumber = 99;
  opts = JSON.stringify([
    {
      text: 'Option 1',
      value: 'option1',
    },
    {
      text: 'Option 2',
      value: 'option2',
      disabled: true,
    },
    {
      text: 'Option 3',
      value: 'option3',
    },
    {
      text: 'Option 4',
      value: 'option4',
    },
  ]);
  isLayerOpen = undefined;
  handleToggle() {
    this.toggleCheck = this.toggleCheck === undefined ? true : undefined;
    alert('dont tickle me');
  }
  manageLayer() {
    console.log(this.isLayerOpen);
    this.isLayerOpen = !this.isLayerOpen;
  }
  closeLayer() {
    console.log('Well done, Im closed now')
  }
}
