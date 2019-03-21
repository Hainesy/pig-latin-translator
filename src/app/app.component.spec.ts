import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PigLatinTranslationService } from './translator/pig-latin-translation.service';
import { FormsModule } from '@angular/forms';
import { TranslatorComponent } from './translator/translator.component';
import { TextToSpeechComponent } from './translator/text-to-speech.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TranslatorComponent, TextToSpeechComponent],
      imports: [FormsModule],
      providers: [PigLatinTranslationService]
    }).compileComponents();
  }));

  it(`should create the app`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));

  it(`should have as title 'Pig Latin Translator'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Pig Latin Translator');
    }));

  it(`should render title in an h1 tag`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Pig Latin Translator');
    }));
});
