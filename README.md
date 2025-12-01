# Advent of code

This is a collection of scripts to solve the [advent of code](https://adventofcode.com/) challenges.
Extremely basic setup for a couple of scripts, with at least some typesafety.
Originally intended to just be a couple of scripts being compiled directly by typescript, but limitations of code and namespace sharing made this quickly unwieldly. It was decided to use esbuild to bundle everything into distinct scripts which can then be appied to the browser data via the console.

## Getting started

### Install dependencies
`npm install`

### Bundle scripts
`npm run build`

### Making changes
Source code in src, with scripts labelled to match the challenge. After compiling, the output js can be found in the corresponding folder in the `dist` directory.

Note to add new scripts, the file name <b>must</b> be in the form `script-XXX.ts`. 

## Running the scripts
Simply paste the compiled `script-XX.js` file into the console of the page containing the data.
