import { Component } from '@angular/core'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  onTextChange(args: any) {
    const textField = args.object;
    let text = textField.text;

    if(text.length == 0) return;

    if (text.length > 3) {
      text = text.replace(/[^\d]/g, "");
      text = this.formatPhoneNumber(text);
      textField.text = text;
    }
  }

  formatPhoneNumber(phoneNumberString) {
    const matches = phoneNumberString.match(/^(\d{0,3})-?(\d{0,3})-?(\d{0,4})$/);
    if (!matches) {
      return phoneNumberString;
    }
    const formattedPhoneNumber = [matches[1], matches[2], matches[3]].filter(Boolean).join("-");
    return formattedPhoneNumber;
  }


  onExtractedValueChange($event: any) {
    console.log(`onExtractedValueChange: ${$event}`);
  }

  onCompletedChage($event: any) {
    console.log(`onCompletedChage: ${$event}`);
  }

  onAppendDash(args: any) {
    const text = args.object.text;
    if(text.length == 1)args.object.text = text + "-";
  }
}
