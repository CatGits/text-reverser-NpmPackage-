
# Text Reverser

Easily and quickly allows you to reverse strings, even whole paragraphs!


## Installation

```
 npm i text-reverser 
```
## Usage

```js

reverser = require('text-reverser')

r = reverser.Reverse('string')

r.then((result) => {
    console.log(result)
})
```
## Example

```js
reverser = require('text-reverser')

r = reverser.Reverse('Hello!')

r.then((result) => {
    console.log(result)
})
```

### Output:
```
!olleH

```

Github Repo: https://github.com/CatGits/text-reverser-NpmPackage

