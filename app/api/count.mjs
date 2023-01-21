export async function post (req) {

  // Max-Age wants seconds; this is five min in seconds
  let max = 60 * 5 
  
  // we need to  parse the raw request cookie to find it
  // the cookie we care about is named 'count' 
  let count = 0
  
  // req.cookies looks like this: ['cookie1=value', 'cookie2=value']
  for (let c of req.cookies) {
    let [key, value] = c.split('=')
    if (key === 'count') {
      // cookies are HTTP headers, which are strings, so we need to cast value to Number
      count = Number(value) + 1
      break
    }
  }

  return {
    statusCode: 303,
    headers: {
      'location': '/',
      'set-cookie': `count=${count}; Max-Age=${max}; Secure; HttpOnly`
    }
  }
}
