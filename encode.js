'use strict'

const uriEncode = require('strict-uri-encode')
const fileUnsafe = require('filename-reserved-regex')()

const replace = [
	[/%2C/g, ','],
	[/%3A/g, ':'],
	[/%28/g, '('],
	[/%29/g, ')'],
	[/%20/g, '_'],
	[/%21/g, '!'],
	// [/%40/g, '@'] this is not url-safe!
]
// add isFileSafe flag
for (let item of replace) {
	item[2] = !fileUnsafe.test(item[1])
}

const encode = (name, fileSafe = false) => {
	let slug = uriEncode(name)
	for (let item of replace) {
		if (!fileSafe || item[2]) {
			slug = slug.replace(item[0], item[1])
		}
	}
	return slug
}

module.exports = encode
