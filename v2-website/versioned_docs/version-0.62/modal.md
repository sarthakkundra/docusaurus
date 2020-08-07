---
id: modal
title: Modal
original_id: modal
---

The Modal component is a basic way to present content above an enclosing view.

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

```SnackPlayer name=Modal&supportedPlatforms=android,ios



```

```SnackPlayer name=Modal&supportedPlatforms=android,ios



```

---

# Reference

## Props

### ``

&gt; **Deprecated.** Use the [``](modal.md#animationtype) prop instead.

---

### ``

The `` prop controls how the modal animates.

- `` slides in from the bottom
- `` fades into view
- `` appears without an animation

Default is set to ``.

| Type                          | Required |
| ----------------------------- | -------- |
| enum('none', 'slide', 'fade') | No       |

---

### ``

The `` prop controls whether to force hardware acceleration for the underlying window.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

The `` prop determines whether your modal should go under the system statusbar.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

The `` prop allows passing a function that will be called once the modal has been dismissed.

| Type     | Required | Platform |
| -------- | -------- | -------- |
| function | No       | iOS      |

---

### ``

The `` callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.

| Type     | Required | Platform |
| -------- | -------- | -------- |
| function | No       | iOS      |

---

### ``

The `callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that` events will not be emitted as long as the modal is open.

| Type     | Required | Platform                 |
| -------- | -------- | ------------------------ |
| function | Yes      | Android, Platform.isTVOS |
| function | No       | (Others)                 |

---

### ``

The `` prop allows passing a function that will be called once the modal has been shown.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The `` prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See for details.

- `` covers the screen completely
- `` covers portrait-width view centered (only on larger devices)
- `` covers narrow-width view centered (only on larger devices)
- `` covers the screen completely, but allows transparency

Default is set to `or` depending on `` property.

| Type                                                           | Required | Platform |
| -------------------------------------------------------------- | -------- | -------- |
| enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen') | No       | iOS      |

---

### ``

The `` prop determines whether your modal should go under the system statusbar.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

The `prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field. When using` of `or`, this property will be ignored by iOS.

| Type                                                                                                | Required | Platform |
| --------------------------------------------------------------------------------------------------- | -------- | -------- |
| array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right') | No       | iOS      |

---

### ``

The `prop determines whether your modal will fill the entire view. Setting this to` will render the modal over a transparent background.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

The `` prop determines whether your modal is visible.

| Type | Required |
| ---- | -------- |
| bool | No       |
