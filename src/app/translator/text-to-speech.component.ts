import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss']
})
export class TextToSpeechComponent {
  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  @Input() text: string;

  private responsiveVoice = (<any>window).responsiveVoice;

  public startSpeech(): void {
    const detectChanges = () => this._changeDetectorRef.detectChanges();
    this.responsiveVoice.speak(this.text, 'UK English Male', {
      pitch: 1.5,
      rate: 0.8,
      onstart: detectChanges,
      onend: detectChanges
    });
  }

  public stopSpeech(): void {
    this.responsiveVoice.cancel();
  }

  public isPlaying(): boolean {
    return this.responsiveVoice.isPlaying();
  }
}
