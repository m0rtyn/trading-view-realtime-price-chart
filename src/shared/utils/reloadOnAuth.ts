import { Maybe } from 'shared/types'

/**
 * @todo find a way to auth user without reloading the page
 * problem: fetching the current user after logging in not update auth state for Apollo subscriptions
 */
export function reloadOnAuth(queryParam: Maybe<string> = null) {
  if (queryParam) {
    location.assign(`/?${queryParam}`)
  } else {
    location.reload()
  }
}
