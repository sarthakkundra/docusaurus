---
id: share
title: Share
original_id: share
---

## Example

<div className="toggler">
  <ul role="tablist" className="toggle-syntax">
    <li id="functional" className="button-functional" aria-selected="false" role="tab" tabIndex={0} aria-controls="functionaltab" onClick="displayTabs('syntax', 'functional')">
      Function Component Example
    </li>
    <li id="classical" className="button-classical" aria-selected="false" role="tab" tabIndex={0} aria-controls="classicaltab" onClick="displayTabs('syntax', 'classical')">
      Class Component Example
    </li>
  </ul>
</div>

block

```SnackPlayer name=Function%20Component%20Example&supportedPlatforms=ios,android



```

```SnackPlayer name=Class%20Component%20Example&supportedPlatforms=ios,android



```

# Reference

## Methods

### ``

```jsx
```

Open a dialog to share text content.

In iOS, returns a Promise which will be invoked with an object containing `and`. If the user dismissed the dialog, the Promise will still be resolved with action being `` and all the other keys being undefined. Note that some share options will not appear or work on the iOS simulator.

In Android, returns a Promise which will always be resolved with action being ``.

### Content

- `` - a message to share

#### iOS

- `` - an URL to share

At least one of URL and message is required.

#### Android

- `` - title of the message

### Options

#### iOS

- `` - a subject to share via email
- ``
- ``

#### Android

- ``

---

### ``

```jsx
```

The content was successfully shared.

---

### ``

```jsx
```

_iOS Only_. The dialog has been dismissed.
