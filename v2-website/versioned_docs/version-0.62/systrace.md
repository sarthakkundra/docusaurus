---
id: systrace
title: Systrace
original_id: systrace
---

`Systrace` is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.

## Example

`Systrace` allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler.

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

```SnackPlayer name=Systrace%20Function%20Component%20Example



```

```SnackPlayer name=Systrace%20Class%20Component%20Example



```

---

# Reference

## Methods

### ``

```jsx
```

---

### ``

```jsx
```

---

### ``

```jsx
```

---

### ``

```jsx
```

beginEvent/endEvent for starting and then ending a profile within the same call stack frame.

---

### ``

```jsx
```

---

### ``

```jsx
```

beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile.

---

### ``

```jsx
```

---

### ``

```jsx
```

Register the value to the profileName on the systrace timeline.
