---
id: keyboard
title: Keyboard
original_id: keyboard
---

`Keyboard` module to control keyboard events.

### Usage

The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it.

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

```SnackPlayer name=Keyboard%20Function%20Component%20Example



```

```SnackPlayer name=Keyboard%20Class%20Component%20Example



```

---

# Reference

## Methods

### ``

```jsx
```

The `` function connects a JavaScript function to an identified native keyboard notification event.

This function then returns the reference to the listener.

**Parameters:**

| Name      | Type     | Required | Description                                                                    |
| --------- | -------- | -------- | ------------------------------------------------------------------------------ |
| eventName | string   | Yes      | The `` is the string that identifies the event you're listening for. See below |
| callback  | function | Yes      | The function to be called when the event fires                                 |

**nativeEvent**

This can be any of the following

- ``
- ``
- ``
- ``
- ``
- ``

Note that if you set `to` or `, only` and `events will be available on Android. If you set` to `, no events will be available on Android.` as well as `` are generally not available on Android since there is no native corresponding event.

---

### ``

```jsx
```

Removes a specific listener.

**Parameters:**

| Name      | Type     | Required | Description                                                         |
| --------- | -------- | -------- | ------------------------------------------------------------------- |
| eventName | string   | Yes      | The `` is the string that identifies the event you're listening for |
| callback  | function | Yes      | The function to be called when the event fires                      |

---

### ``

```jsx
```

Removes all listeners for a specific event type.

**Parameters:**

| Name      | Type   | Required | Description                                                          |
| --------- | ------ | -------- | -------------------------------------------------------------------- |
| eventType | string | Yes      | The native event string listeners are watching which will be removed |

---

### ``

```jsx
```

Dismisses the active keyboard and removes focus.

---

### ``

```jsx
```

Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements.
