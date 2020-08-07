---
id: geolocation
title: Geolocation
original_id: geolocation
---

The Geolocation API follows the web spec: https:

### iOS

You need to include the `key in Info.plist to enable geolocation. Geolocation is enabled by default when you create a project with`.

### Android

To request access to location, you need to add the following line to your app's ``:

``

Geolocation support for Android is planned but not yet open sourced. See [Known Issues](https://reactnative.dev/known-issues.md#missing-modules-and-native-views).

### Methods

- [``](geolocation.md#getcurrentposition)
- [``](geolocation.md#watchposition)
- [``](geolocation.md#clearwatch)
- [``](geolocation.md#stopobserving)

---

# Reference

## Methods

### ``

```jsx
```

Invokes the success callback once with the latest location info. Supported options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool)

---

### ``

```jsx
```

Invokes the success callback whenever the location changes. Supported options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool)

---

### ``

```jsx
```

---

### ``

```jsx
```

Stops observing for device location changes. In addition, it removes all listeners previously registered.

Notice that this method has only effect if the `` method was previously invoked.
