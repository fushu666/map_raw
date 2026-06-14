// Development uses the raw server IP to avoid DNS/HTTPS/tunnel changes while testing.
// Switch this back to a valid HTTPS domain before submitting the mini program.
const API_ORIGIN = 'http://47.92.86.4'

// Lightweight mini-program mode: the official PNG snapshot is the default.
// It is a single image per year, so the page opens fast and year switching is
// instant (no PBF decode, no GeoJSON tiles, no texture/terrain/city/sprite).
// vectorCanvas stays in the codebase as an experimental renderer but is no
// longer the default because decoding GeoJSON tiles is too heavy for the
// mini program. Set this to 'vectorCanvas' to opt back into the experiment.
const MINI_RENDERER = 'snapshot'
const MANIFEST_URL = `${API_ORIGIN}/api/mini-program/manifest${MINI_RENDERER ? `?renderer=${MINI_RENDERER}` : ''}`

function buildSnapshotUrl(year) {
  return `${API_ORIGIN}/api/snapshot?year=${encodeURIComponent(year)}`
}

module.exports = {
  API_ORIGIN,
  MANIFEST_URL,
  MINI_RENDERER,
  buildSnapshotUrl,
}
