'use strict'

const _ = /_/g

const decode = (slug) => {
	return decodeURIComponent(slug).replace(_, ' ')
}

module.exports = decode
