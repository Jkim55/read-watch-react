export function selectBook(book){  // selectBook is an action creator that returns an action
  return {
    type: 'BOOK_SELECTED',          // this is the action that is being returned. Actions typically include a type and payload. Types are usually constants
    payload: book
  }
}
