'use strict'

const uriEncode = require('strict-uri-encode')

const replace = [
	[/%2C/g, ','],
	[/%3A/g, ':'],
	[/%28/g, '('],
	[/%29/g, ')'],
	[/%20/g, '_'],
	[/%21/g, '!'],
	// [/%40/g, '@'] this is not url-safe!
]

const encode = (name) => {
	let slug = uriEncode(name)
	for (let item of replace) {
		slug = slug.replace(item[0], item[1])
	}
	return slug
}

module.exports = encode
