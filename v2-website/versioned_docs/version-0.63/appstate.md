---
id: appstate
title: AppState
original_id: appstate
---

`AppState` can tell you if the app is in the foreground or background, and notify you when the state changes.

AppState is frequently used to determine the intent and proper behavior when handling push notifications.

### App States

- `active` - The app is running in the foreground
- `background` - The app is running in the background. The user is either:
  - in another app
  - on the home screen
  - [Android] on another `Activity` (even if it was launched by your app)
- [iOS] `inactive` - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call

For more information, see [Apple's documentation](https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle)

## Basic Usage

To see the current state, you can check `AppState.currentState`, which will be kept up-to-date. However, `currentState` will be null at launch while `AppState` retrieves it over the bridge.

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

```SnackPlayer name=AppState%20Function%20Component%20Example



```

If you don't want to see the AppState update from `to` on iOS you can remove the state variable and use the `` value.

```SnackPlayer name=AppState%20Class%20Component%20Example



```

This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the `` state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview.

---

# Reference

## Events

### ``

This event is received when the app state has changed. The listener is called with one of [the current app state values](appstate#app-states).

### ``

This event is used in the need of throwing memory warning or releasing it.

### ``

[Android only] Received when the app gains focus (the user is interacting with the app).

### ``

[Android only] Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the [notification drawer](https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer). `won't change but the` event will get fired.

## Methods

### ``

```jsx
```

Add a handler to AppState changes by listening to the `` event type and providing the handler

TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate `and` and use `and` directly. That will be a breaking change though, as both the method and event names are different (addListener events are currently required to be globally unique).

---

### ``

```jsx
```

Remove a handler by passing the `` event type and the handler

## Properties

### ``

```jsx
```
