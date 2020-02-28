import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordGenerator';
  passwordLength = 0;
  password = '';
  includeLetters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;

  onButtonClick() {
    // console.log('Button Clicked');
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()';
    let validChar = '',
      generatedPassword = '';
    if (this.includeLetters) {
      validChar += letters;
    }
    if (this.includeNumbers) {
      validChar += numbers;
    }
    if (this.includeSymbols) {
      validChar += symbols;
    }
    if (validChar === '') {
      validChar += numbers + letters + symbols;
    }
    for (let counter = 0; counter < this.passwordLength; counter++) {
      const randomIndex = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[randomIndex];
    }
    this.password = generatedPassword;
  }
  onLengthChange(passwordLength: string) {
    const parsedValue = parseInt(passwordLength, 10);
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    } else {
      this.passwordLength = 0;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
