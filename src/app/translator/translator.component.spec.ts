import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorComponent } from './translator.component';
import { FormsModule } from '@angular/forms';
import { PigLatinTranslationService } from './pig-latin-translation.service';
import { TextToSpeechComponent } from './text-to-speech.component';

describe('TranslatorComponent', () => {
  let component: TranslatorComponent;
  let fixture: ComponentFixture<TranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TranslatorComponent, TextToSpeechComponent],
      imports: [FormsModule],
      providers: [PigLatinTranslationService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
