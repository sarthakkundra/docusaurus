---
id: backhandler
title: BackHandler
original_id: backhandler
---

The Backhandler API detects hardware button presses for back navigation, lets you register event listeners for the system's back action, and lets you control how your application responds. It is Android-only.

The event subscriptions are called in reverse order (i.e. the last registered subscription is called first).

- **If one subscription returns true,** then subscriptions registered earlier will not be called.
- **If no subscription returns true or none are registered,** it programmatically invokes the default back button functionality to exit the app.

&gt; **Warning for modal users:** If your app shows an opened `Modal`, `BackHandler` will not publish any events ([see `Modal` docs](modal#onrequestclose)).

## Pattern

```jsx
BackHandler.addEventListener('hardwareBackPress', function() {
  /**
   * this.onMainScreen and this.goBack are just examples,
   * you need to use your own implementation here.
   *
   * Typically you would use the navigator here to go to the last state.
   */

  if (!this.onMainScreen()) {
    this.goBack();
    /**
     * When true is returned the event will not be bubbled up
     * & no other back action will execute
     */
    return true;
  }
  /**
   * Returning false will let the event to bubble up & let other event listeners
   * or the system's default back action to be executed.
   */
  return false;
});
```

## Example

The following example implements a scenario where you confirm if the user wants to exit the app:

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

```SnackPlayer name=BackHandler&supportedPlatforms=android



```

```SnackPlayer name=BackHandler&supportedPlatforms=android



```

`creates an event listener & returns a` object which should be cleared using `` method.

Additionally `can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the` call as shown the following example ﹣

      Function Component Example


      Class Component Example

```SnackPlayer name=BackHandler&supportedPlatforms=android



```

```SnackPlayer name=BackHandler&supportedPlatforms=android



```

## Usage with React Navigation

If you are using React Navigation to navigate across different screens, you can follow their guide on [Custom Android back button behaviour](https://reactnavigation.org/docs/custom-android-back-button-handling/)

## Backhandler hook

[React Native Hooks](https://github.com/react-native-community/hooks#usebackhandler) has a nice `` hook which will simplify the process of setting up event listeners.

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
