export function cleanQueryParams() {
  window.history.replaceState(window.history.state, '', '/')
}

export function toQueryParams(query: string) {
  window.history.replaceState(window.history.state, '', '/?' + query)
}
