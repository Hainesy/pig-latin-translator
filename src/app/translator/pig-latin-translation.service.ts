import { Injectable } from '@angular/core';

@Injectable()
export class PigLatinTranslationService {
  private suffix = 'ay';

  /**
   * Translate English into Pig Latin
   * @param input the text to translate
   * @param [delimiter=''] placed between the first and last parts of each words
   * @returns the translated text
   */
  public translate(input: string, delimiter: string = ''): string {
    if (!input || !input.trim()) {
      return '';
    }

    // Add spaces after end-of-sentence punctuation if missing
    input = input.replace(/([\.\?\!\;\:])([^\s\.\?\!\;\:])/g, '$1 $2');

    // Split into words and translate
    return this.splitIntoNonBlankWords(input)
      .map(x =>
        this.splitHyphens(x)
          .map(this.translateWord.bind(this, delimiter))
          .join('-')
      )
      .join(' ');
  }

  private splitIntoNonBlankWords(input: string): string[] {
    return input
      .trim()
      .split(/\s/)
      .filter(x => x);
  }

  private splitHyphens(input: string): string[] {
    return input.split('-').filter(x => x);
  }

  /**
   * Transate a single word from English to Pig Latin
   */
  private translateWord(delimiter: string, word: string): string {
    // Match the first vowel or the first 'y' vowel sound
    const match = (!word.match(/^y/i) && word.match(/[aeiouy]/i)) || word.match(/[aeiou]/i);

    if (word.toUpperCase() === 'I') {
      // Special case for the word 'I'
      // TODO: Investigate and improve the logic here
      return 'I' + delimiter + /*'w' +*/ this.suffix;
    }

    if (!match || this.isVowel(word[0])) {
      // If there are no vowels or the word starts with a vowel, simply append the suffix
      const punctuated = this.punctuate(word, this.getCasedSuffixFor(word));
      // Join word and suffix together with delimiter, skipping delimter if either word or suffix are blank
      return [punctuated.word, punctuated.suffix].filter(x => x).join(delimiter);
    }

    // If the word starts with a consonant followed by a silent vowel, move both characters to end
    const splitIndex = this.hasSilentSecondVowel(word) ? 2 : match.index;

    // Split the word and append the suffix
    return this.splitAndAppend(word, splitIndex, delimiter);
  }

  /**
   * Move the consonent sound to the end of the word suffied with 'ay'
   */
  private splitAndAppend(word: string, splitIndex: number, delimiter: string): string {
    let lastPart = word.substr(0, splitIndex);

    // Ensure punctuation remains at the end of the word
    // tslint:disable-next-line:prefer-const
    let { word: firstPart, suffix } = this.punctuate(word.substr(splitIndex), this.suffix);

    if (this.isUpperCase(word[0]) && !this.isUpperCase(word)) {
      // If the first character of the word was capitalised,
      // but the whole word wasn't, maintain proper casing
      firstPart = firstPart[0].toUpperCase() + firstPart.substr(1);
      lastPart = lastPart[0].toLowerCase() + lastPart.substr(1);
    }

    return firstPart + delimiter + lastPart + this.getCasedSuffixFor(lastPart, suffix);
  }

  /**
   * Return correctly punctuated suffix and adjusted word
   */
  private punctuate(word: string, suffix: string): { word: string; suffix: string } {
    const punctuation = word.match(/[\.\?\!\;\:]+$/);
    if (punctuation) {
      suffix = suffix + punctuation[0];
      word = word.substr(0, punctuation.index);
    }
    return { word, suffix };
  }

  /**
   * Return correctly cased suffix
   */
  private getCasedSuffixFor(part: string, suffix: string = this.suffix): string {
    part = part.replace(/[^a-z]/gi, '');
    if (!part) {
      return '';
    }
    if (this.isUpperCase(part[part.length - 1])) {
      // If the last character before suffix is capitalised
      // then capitalise the suffix too
      return suffix.toUpperCase();
    }
    return suffix;
  }

  /**
   * Helper functions
   */

  private isUpperCase(str: string): boolean {
    return str.toUpperCase() === str;
  }

  private isVowel(character: string): boolean {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(character.toLocaleLowerCase()) !== -1;
  }

  private hasSilentSecondVowel(word: string): boolean {
    const wordLower = word.toLocaleLowerCase();
    return !!['qu', 'gue', 'gui'].filter(x => wordLower.startsWith(x)).length;
  }
}
