import { inject, TestBed } from '@angular/core/testing';

import { PigLatinTranslationService } from './pig-latin-translation.service';

describe('PigLatinTranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PigLatinTranslationService]
    });
  });

  it(`should translate a word beginning with a consonant`, inject([PigLatinTranslationService], (service: PigLatinTranslationService) => {
    expect(service.translate('piglet')).toBe('igletpay');
  }));
});
