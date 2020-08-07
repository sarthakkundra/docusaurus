---
id: accessibilityinfo
title: AccessibilityInfo
original_id: accessibilityinfo
---

Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The `AccessibilityInfo` API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.

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

```SnackPlayer name=AccessibilityInfo%20Function%20Component%20Example



```

```SnackPlayer name=AccessibilityInfo%20Class%20Component%20Example



```

---

# Reference

## Methods

### ``

```jsx
```

**iOS-Only.** Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is `when bold text is enabled and` otherwise.

### ``

```jsx
```

**iOS-Only.** Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is `when grayscale is enabled and` otherwise.

### ``

```jsx
```

**iOS-Only.** Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is `when invert colors is enabled and` otherwise.

### ``

```jsx
```

Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is `when reduce motion is enabled and` otherwise.

### ``

```jsx
```

**iOS-Only.** Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is `when a reduce transparency is enabled and` otherwise.

### ``

```jsx
```

Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is `when a screen reader is enabled and` otherwise.

---

### ``

```jsx
```

Add an event handler. Supported events:

- `: iOS-only event. Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is` when bold text is enabled and `` otherwise.
- `: iOS-only event. Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is` when a gray scale is enabled and `` otherwise.
- `: iOS-only event. Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is` when invert colors is enabled and `` otherwise.
- `: Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is` when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and `` otherwise.
- `: Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is` when a screen reader is enabled and `` otherwise.
- `: iOS-only event. Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is` when reduce transparency is enabled and `` otherwise.
- ``: iOS-only event. Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:
  - ``: The string announced by the screen reader.
  - ``: A boolean indicating whether the announcement was successfully made.

---

### ``

```jsx
```

Set accessibility focus to a React component. On Android, this calls ``.

&gt; **Note**: Make sure that any `you want to receive the accessibility focus has`.

---

### ``

```jsx
```

Post a string to be announced by the screen reader.

---

### ``

```jsx
```

Remove an event handler.
