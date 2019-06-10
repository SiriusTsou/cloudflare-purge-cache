#! /usr/bin/env node

const cloudflarePurgeCache = require('../lib/index.js')

const argv = require('yargs')
.option('email', {
  alias: 'e',
  describe: 'Cloudflare\'s email'
})
.option('key', {
  alias: 'k',
  describe: 'Cloudflare\'s API key'
})
.option('zone', {
  alias: 'z',
  describe: 'Cloudflare\'s Zone ID'
})
.option('slient', {
  alias: 's',
  describe: 'Slient Mode'
})
.help()
.argv

argv.email = argv.email || argv._[0]
argv.key = argv.key || argv._[1]
argv.zone = argv.zone || argv._[2]
argv.slient = argv.slient || argv._[3]

const slient = (typeof argv.slient !== 'undefined' && argv.slient === "true")
cloudflarePurgeCache(argv.email, argv.key, argv.zone).then(result => {
  if (!slient) console.log(result)
  process.exit(0)
}).catch(e => {
  if (!slient) console.error(e)
  process.exit(1)
})