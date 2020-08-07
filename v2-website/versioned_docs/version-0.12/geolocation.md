---
id: geolocation
title: Geolocation
original_id: geolocation
---

You need to include the `NSLocationWhenInUseUsageDescription` key in Info.plist to enable geolocation. Geolocation is enabled by default when you create a project with `react-native init`.

Geolocation follows the MDN specification: https:

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
