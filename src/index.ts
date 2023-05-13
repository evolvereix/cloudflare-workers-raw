const hostname = 'https://raw.githubusercontent.com'
export default {
  async fetch(request: Request) {
    try {
      const { pathname } = new URL(request.url)
      return fetch(new Request(`${hostname}${pathname}`, request))
    } catch (err: any) {
      return new Response(err.stack, { status: 500 })
    }
  },
}
