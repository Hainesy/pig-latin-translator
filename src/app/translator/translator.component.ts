import { ChangeDetectorRef, Component } from '@angular/core';
import { PigLatinTranslationService } from './pig-latin-translation.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent {
  textInput: string;
  hyphenate = true;

  constructor(private _pigLatinTranslationService: PigLatinTranslationService, private _changeDetectorRef: ChangeDetectorRef) {}

  public getTranslation(): string {
    if (!this.showTranslation()) {
      return '';
    }
    const delimiter = this.hyphenate ? '-' : '';
    return this._pigLatinTranslationService.translate(this.textInput, delimiter);
  }

  public showTranslation(): boolean {
    return !!this.textInput && !!this.textInput.replace(/\s/g, '');
  }

  public startSpeech(): void {
    const detectChanges = () => this._changeDetectorRef.detectChanges();
    (<any>window).responsiveVoice.speak(this.getTranslation(), 'UK English Male', {
      pitch: 1.5,
      rate: 0.8,
      onstart: detectChanges,
      onend: detectChanges
    });
  }

  public stopSpeech(): void {
    (<any>window).responsiveVoice.cancel();
  }

  public isPlaying(): boolean {
    return (<any>window).responsiveVoice.isPlaying();
  }
}
