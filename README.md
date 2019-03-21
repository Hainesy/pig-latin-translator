# Pig Latin Translator

Pig Latin is a language game in which words in English are altered, usually by adding a fabricated suffix or by moving the onset or initial consonant or consonant cluster of a word to the end of the word and adding a vocalic syllable to create such a suffix (e.g. “banana” would become “anana­bay”).

## Rules

The usual rules for changing standard English into Pig Latin are as follows:

1. In words that begin with consonant sounds, the initial consonant or consonant cluster is moved to the end of the word, and “ay” is added, as in the following examples:
  ⁃	beast → east­bay
	⁃	dough → ough­day
	⁃	happy → appy­hay
	⁃	question → estion­quay
	⁃	star → ar­stay
	⁃	three → ee­thray
2. In words that begin with vowel sounds or silent consonants, the syllable “ay” is added to the end of the word. A hyphen or apostrophe is sometimes used to facilitate translation back into English. Ayspray, for instance, is ambiguous, but when hyphenating ay-­spray means "spray" whereas ays­pray means "prays”.
3. For clarity, words beginning and ending in vowel sounds should have “way” added to the end, e.g. “I” should be translated “Iway”.

## Requirements
1. Create a web application that can translate strings of English text into Pig Latin.
2. Provide the user with the option to hyphenate words as described in rule 2 above.

## Development Setup
Below are instructions for cloning, installing and running the project.

### Clone the git repository
From a command line type `git clone https://github.com/Hainesy/pig-latin-translator.git`. Once cloned, cd to the directory and follow the installation instructions below.

### Installation
Before running any of the below commands you must first install all npm packages by running `npm install`.

### Running the project
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
- Run `npm run cy:open` to open [Cypress](https://www.cypress.io/) end-to-end tests. Note that to execute the tests, you must run `ng serve` first.
- Run `npm run cy:run` to run [Cypress](https://www.cypress.io/) end-to-end tests from the command line. Note that to execute the tests, you must run `ng serve` first.
