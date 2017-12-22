import geoip from 'geoip-lite'

export default async req => {
  const geo = geoip.lookup(req.ip)
  return {
    geoip: {
      country: geo ? geo.country : null
    }
  }
}