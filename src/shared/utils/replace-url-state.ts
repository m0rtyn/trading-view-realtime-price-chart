export const replaceUrlState = (url: string) => {
  window.history.replaceState(window.history.state, '', url)
}
