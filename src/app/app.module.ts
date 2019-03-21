import { TextToSpeechComponent } from './translator/text-to-speech.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PigLatinTranslationService } from './translator/pig-latin-translation.service';
import { TranslatorComponent } from './translator/translator.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    TextToSpeechComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PigLatinTranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
