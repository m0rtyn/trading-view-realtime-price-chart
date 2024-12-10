export const useQueryParams = () => {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)

  return params
}
