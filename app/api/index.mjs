export async function get (req) {
  return { 
    json: { cookies: req.cookies }
  }
}
