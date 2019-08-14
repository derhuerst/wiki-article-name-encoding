# wiki-article-name-encoding

**Encode & decode Wiki(pedia) article names/[slugs](https://en.wikipedia.org/wiki/Semantic_URL#Slug).** See [more details](https://en.wikipedia.org/wiki/Wikipedia:Page_name#Spaces.2C_underscores_and_character_coding).

[![npm version](https://img.shields.io/npm/v/wiki-article-name-encoding.svg)](https://www.npmjs.com/package/wiki-article-name-encoding)
[![build status](https://img.shields.io/travis/derhuerst/wiki-article-name-encoding.svg)](https://travis-ci.org/derhuerst/wiki-article-name-encoding)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/wiki-article-name-encoding.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install wiki-article-name-encoding
```


## Usage

```js
const {encode, decode} = require('wiki-article-name-encoding')

const encoded = encode('Walentynów, Lipsko County')
console.log(encoded) // Walentyn%C3%B3w,_Lipsko_County
console.log(decode(encoded)) // Walentynów, Lipsko County
```

`encode` and `decode` can also be loaded separately:

```js
const encode = require('wiki-article-name-encoding/encode')
const decode = require('wiki-article-name-encoding/decode')
```


## API

```js
encode(name, fileSafe = false) => slug
decode(slug) => name
```

If you pass `true` for `fileSafe`, `encode` will use [`filename-reserved-regex`](https://github.com/sindresorhus/filename-reserved-regex#readme) to figure out with characters *not to keep unencoded*. It will not respect [Windows reserved file names](https://github.com/sindresorhus/filename-reserved-regex#filenamereservedregexwindowsnames).


## Contributing

If you have a question or have difficulties using `wiki-article-name-encoding`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/wiki-article-name-encoding/issues).
