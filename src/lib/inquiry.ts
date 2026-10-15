/**
 * Every call-to-action on the site leads to the contact page. A topic (a
 * product name, "Demo") travels in the query string and is pre-filled in the
 * form, so the visitor only has to add their name, contact and message.
 */
export function contactHref(topic?: string) {
  return topic ? `/contact?topic=${encodeURIComponent(topic)}` : '/contact'
}
