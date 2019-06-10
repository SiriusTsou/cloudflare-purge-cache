const r2 = require('r2')

const main = async ({email, key, zone}) => {
  const headers = {
    'X-Auth-Email': email,
    'X-Auth-Key': key,
  }

  const data = {'purge_everything': true}
  const resp = await r2.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`, {headers, json: data}).json
  if (!resp.success) throw resp
  return resp
}

module.exports = main