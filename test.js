'use strict'

const test = require('tape')

const {encode, decode} = require('.')

// see https://en.wikipedia.org/wiki/Wikipedia:Page_name#Spaces.2C_underscores_and_character_coding
const pairs = [
	['Barack Obama', 'Barack_Obama'], // underscores
	[`Don't Ask, Don't Tell Repeal Act of 2010`, 'Don%27t_Ask,_Don%27t_Tell_Repeal_Act_of_2010'], // casing, ignore comma
	['Walentynów, Lipsko County', 'Walentyn%C3%B3w,_Lipsko_County'], // non-ASCII chars
	['Wikipedia:Page name', 'Wikipedia:Page_name'], // ignore colon
	['Michael Keller (filmmaker)', 'Michael_Keller_(filmmaker)'], // ignore parentheses
	[`Dragons' Den`, 'Dragons%27_Den'], // ignore parentheses
	['!!!', '!!!'], // ignore exclamation marks
	// todo: this is not url-safe! what to do?
	// ['@Andheri', '@Andheri'], // ignore @
]

test('encode', (t) => {
	t.plan(pairs.length)
	for (let [raw, encoded] of pairs) t.equal(encode(raw), encoded)
})

test('decode', (t) => {
	t.plan(pairs.length)
	for (let [raw, encoded] of pairs) t.equal(decode(encoded), raw)
})
