## The Apollo Collections

## Data layer

### Object array containing detailed information about all of the albums in the collection (collectionContext)

- Modify album information

### Object array containing detailed information about albums in the local local collection (local API)

- Add album to collection
- Delete album from collection
- Modify album information

### User interface status (uiContext)

- Current page: main, collection, my-collection, album-detail.
- Loading: true/false
- Error: true/false
- Album was added: true/false
- Incomplete information: true/false
- Album was removed: true/false
- Album was modified: true/false
- Album/playlist not found : true/false
- Form: true/false

## Components

### App

#### Renderizes main page when route is “main”

- Renderizes header component with button action to change status to “complete-collection” and another to change status to “my-collection”.
- Renderizes main image and text
- Renderizes “complete collection” title with 9 card components received from card context.
- Renderizes button with “next page” text and action to advance
- Renderizes button with “previous page” text and action to go back
- Renderizes footer

#### Renderizes my Collection page when route is “my-collection”

- Renderizes header component with button action to change status to “complete-collection” and another to change status to “my-collection”.
- Renderizes “My playlist” title
- Renderizes form with a button, which contains an action to submit the album.
- Renderizes 9 card components received from local API.
- Renderizes button with “next page” text and action to advance
- Renderizes button with “previous page” text and action to go back
- Renderizes footer

#### Renderizes complete collection when current page status is “complete-collection”

- Renderizes header component with button action to change status to “complete-collection” and another to change status to “my-collection”.
- Renderizes “My collection” title
- Renderizes search button, passing text and action to filter by tag (which is the same as text)
- Renderizes all card components available in collectionContext..
- Renderizes album detail page when current page status is “album-detail”
- Renderizes header component with button action to change status to “complete-collection” and another to change status to “my-collection”.
- Renderizes detailed card component according to data sent from album context.
- Renderizes notification pop-up when any of the other states is true

### Header

- Renderizes information
- Renderizes buttons with received actions

### Filter bar

- Renderizes search bar
- Renderizes search button with received action

### Album

- Receives information from albumContext
- Renderizes album cover, title and artist
- Renderizes add/delete button depending on the received state, with action to add/delete from local API
- Receives action to change page status to “page-detail”

### Category preview

- Receives category name and albums contained in that category
- Renderizes albums received, with its cover and category name
- Renderizes scroll button with received action

### Detailed album

- Receives information from albumContext
- Renderizes album cover, title, artist, release date, genre and tracklist
- Renderizes add/delete button, with action to add/delete from local API
- Renderizes button to modify information from local API, activating form status

### Form

- Renderizes all of the required fields, with the received type, information and options
- Renderizes button component with the received action, which activates depending on UI state.

### Button

- Renderizes a button with the received text within
- Calls the received action when clicked by the user

### Footer

- Renderizes information
- Renderizes buttons with received actions

### Notification

- Receives type of notification
- Renderizes information as a pop-up, depending conditionally on type of notification received
  > - Loading
  > - Error
  > - Album was added
  > - Incomplete information
  > - Album was removed
  > - Album was modified
  > - Album/playlist not found
