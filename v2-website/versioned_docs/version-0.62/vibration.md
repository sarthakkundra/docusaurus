---
id: vibration
title: Vibration
original_id: vibration
---

Vibrates the device.

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

```SnackPlayer name=Vibration&supportedPlatforms=ios,android



```

```SnackPlayer name=Vibration&supportedPlatforms=ios,android



```

&gt; Android apps should request the `permission by adding` to ``.

&gt; The Vibration API is implemented as a `` call on iOS.

---

# Reference

## Methods

### ``

```jsx
```

Triggers a vibration with a fixed duration.

**On Android,** the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the `` argument. **On iOS,** the vibration duration is fixed at roughly 400 milliseconds.

The `method can take a` argument with an array of numbers that represent time in milliseconds. You may set `to true to run through the vibration pattern in a loop until` is called.

**On Android,** the odd indices of the `array represent the vibration duration, while the even ones represent the separation time. **On iOS,** the numbers in the` array represent the separation time, as the vibration duration is fixed.

**Parameters:**

| Name    | Type             | Required | Description                                                | Platform     |
| ------- | ---------------- | -------- | ---------------------------------------------------------- | ------------ |
| pattern | number           | No       | Vibration duration in milliseconds. Defaults to 400 ms.    | Android      |
| pattern | Array of numbers | No       | Vibration pattern as an array of numbers in milliseconds.  | Android, iOS |
| repeat  | boolean          | No       | Repeat vibration pattern until cancel(), default to false. | Android, iOS |

---

### ``

```jsx
```

Call this to stop vibrating after having invoked `` with repetition enabled.
