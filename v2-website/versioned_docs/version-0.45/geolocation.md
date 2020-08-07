---
id: geolocation
title: Geolocation
original_id: geolocation
---

The Geolocation API extends the web spec: https:

As a browser polyfill, this API is available through the `global - you do not need to` it.

### Configuration and Permissions

Projects with Native Code Only

    This section only applies to projects made with react-native init
    or to those made with Create React Native App which have since ejected. For
    more information about ejecting, please see
    the guide on
    the Create React Native App repository.

#### iOS

You need to include the `key in Info.plist to enable geolocation when using the app. Geolocation is enabled by default when you create a project with`.

In order to enable geolocation in the background, you need to include the 'NSLocationAlwaysUsageDescription' key in Info.plist and add location as a background mode in the 'Capabilities' tab in Xcode.

#### Android

To request access to location, you need to add the following line to your app's ``:

``

Android API &gt;= 18 Positions will also contain a `` boolean to indicate if position was created from a mock provider.

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

Invokes the success callback once with the latest location info. Supported options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool) On Android, if the location is cached this can return almost immediately, or it will request an update which might take a while.

---

### ``

```jsx
```

Invokes the success callback whenever the location changes. Supported options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool), distanceFilter(m)

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
