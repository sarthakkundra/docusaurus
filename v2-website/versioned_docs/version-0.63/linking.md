---
id: linking
title: Linking
original_id: linking
---

<div className="banner-native-code-required">
  <h3>Projects with Native Code Only</h3>
  <p>
    The following section only applies to projects with native code exposed. If you are using the managed <code>expo-cli</code> workflow, see the guide on <a href="http://docs.expo.io/versions/latest/workflow/linking/">Linking</a> in the Expo documentation for the appropriate alternative.
  </p>
</div>

`Linking` gives you a general interface to interact with both incoming and outgoing app links.

Every Link (URL) has a URL Scheme, some websites are prefixed with `https://` or `http://` and the `http` is the URL Scheme. Let's call it scheme for short.

In addition to `https`, you're likely also familiar with the `mailto` scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about [built-in URL](#built-in-url-schemes) schemes below.

Like using the mailto scheme, it's possible to link to other applications by using custom url schemes. For example, when you get a **Magic Link** email from Slack, the **Launch Slack** button is an anchor tag with an href that looks something like: `slack://secret/magic-login/other-secret`. Like with Slack, you can tell the operating system that you want to handle a custom scheme. When the Slack app opens, it receives the URL that was used to open it. This is often referred to as deep linking. Read more about how to [get the deep link](#get-the-deep-link) into your app.

Custom URL scheme isn't the only way to open your application on mobile. You don't want to use a custom URL scheme in links in the email because then the links would be broken on desktop. Instead, you want to use a regular `https` links such as `https://www.myapp.io/records/1234546`. and on mobile you want that link open your app. Android calls it **Deep Links** (Universal Links - iOS).

### Built-in URL Schemes

As mentioned in the introduction, there are some URL schemes for core functionality that exist on every platform. The following is a non-exhaustive list, but covers the most commonly used schemes.

| Scheme           | Description                                                          | iOS | Android |
| ---------------- | -------------------------------------------------------------------- | --- | ------- |
| `mailto`         | Open mail app, eg: mailto: [support@expo.io](mailto:support@expo.io) | ✅  | ✅      |
| `tel`            | Open phone app, eg: tel:+123456789                                   | ✅  | ✅      |
| `sms`            | Open SMS app, eg: sms:+123456789                                     | ✅  | ✅      |
| `https` / `http` | Open web browser app, eg: https:                                     | ✅  | ✅      |

### Enabling Deep Links

If you want to enable deep links in your app, please read the below guide:

      Android


      iOS

&gt; For instructions on how to add support for deep linking on Android, refer to [Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links](http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters).

If you wish to receive the intent in an existing instance of MainActivity, you may set the `of MainActivity to` in `. See [`](http://developer.android.com/guide/topics/manifest/activity-element.html) documentation for more information.

```xml



```

&gt; **NOTE:** On iOS, you'll need to link `to your project by following the steps described [here](linking-libraries-ios.md#manual-linking). If you also want to listen to incoming app links during your app's execution, you'll need to add the following lines to your`:

```objectivec



```

If you're targeting iOS 8.x or older, you can use the following code instead:

```objectivec



```

If your app is using [Universal Links](https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html), you'll need to add the following code as well:

```objectivec



```

### Handling Deep Links

There are two ways to handle URLs that open your app.

#### 1. If the app is already open, the app is foregrounded and a Linking event is fired

You can handle these events with ``.

#### 2. If the app is not already open, it is opened and the url is passed in as the initialURL

You can handle these events with `` -- it returns a Promise that resolves to the url, if there is one.

---

## Example

### Open Links and Deep Links (Universal Links)

```SnackPlayer name=Linking%20Function%20Component%20Example&supportedPlatforms=ios,android



```

### Open Custom Settings

```SnackPlayer name=Linking%20Function%20Component%20Example&supportedPlatforms=ios,android



```

### Get the Deep Link

```SnackPlayer name=Linking%20Function%20Component%20Example&supportedPlatforms=ios,android



```

### Send Intents (Android)

```SnackPlayer name=Linking%20Function%20Component%20Example&supportedPlatforms=android



```

# Reference

## Methods

### ``

```jsx
```

---

### ``

```jsx
```

Add a handler to Linking changes by listening to the `` event type and providing the handler.

---

### ``

```jsx
```

Remove a handler by passing the `` event type and the handler.

---

### ``

```jsx
```

Try to open the given `` with any of the installed apps.

You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386" on Android or " on iOS), a contact, or any other URL that can be opened with the installed apps.

The method returns a `` object. If the user confirms the open dialog or the url automatically opens, the promise is resolved. If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected.

**Parameters:**

| Name | Type   | Required | Description      |
| ---- | ------ | -------- | ---------------- |
| url  | string | Yes      | The URL to open. |

&gt; This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check {"{"}@code canOpenURL{"}"} first.

&gt; For web URLs, the protocol ("http://", "https://") must be set accordingly!

&gt; This method may behave differently in a simulator e.g. "tel:" links are not able to be handled in the iOS simulator as there's no access to the dialer app.

---

### ``

```jsx
```

Determine whether or not an installed app can handle a given URL.

The method returns a `` object. When it is determined whether or not the given URL can be handled, the promise is resolved and the first parameter is whether or not it can be opened.

The `will reject on Android if it was impossible to check if the URL can be opened, and on iOS if you didn't add the specific scheme in the` key inside `` (see bellow).

**Parameters:**

| Name | Type   | Required | Description      |
| ---- | ------ | -------- | ---------------- |
| url  | string | Yes      | The URL to open. |

&gt; For web URLs, the protocol ("http://", "https://") must be set accordingly!

&gt; As of iOS 9, your app needs to provide the `key inside` or canOpenURL will always return false.

&gt; This method has limitations on iOS 9+. From [the official Apple documentation](https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl):

&gt; If your app is linked against an earlier version of iOS but is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always return false. If the user reinstalls or upgrades the app, iOS resets the limit.

---

### ``

```jsx
```

Open the Settings app and displays the app’s custom settings, if it has any.

---

### ``

```jsx
```

If the app launch was triggered by an app link, it will give the link url, otherwise it will give ``.

&gt; To support deep linking on Android, refer

---

### ``

```jsx
```

&gt; @platform android

**Android-Only.** Launch an Android intent with extras (optional)
