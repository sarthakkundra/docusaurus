---
id: webview
title: WebView
original_id: webview
---

Renders a native WebView.

Note that WebView is only supported on iOS for now, see https:

### Props

- [View props...](view.md#props)

* [``](webview.md#scrollenabled)
* [``](webview.md#automaticallyadjustcontentinsets)
* [``](webview.md#contentinset)
* [``](webview.md#html)
* [``](webview.md#injectedjavascript)
* [``](webview.md#onnavigationstatechange)
* [``](webview.md#rendererror)
* [``](webview.md#renderloading)
* [``](webview.md#bounces)
* [``](webview.md#startinloadingstate)
* [``](webview.md#style)
* [``](webview.md#url)
* [``](webview.md#javascriptenabledandroid)
* [``](webview.md#allowsinlinemediaplayback)
* [``](webview.md#onshouldstartloadwithrequest)
* [``](webview.md#scalespagetofit)

### Methods

- [``](webview.md#goforward)
- [``](webview.md#goback)
- [``](webview.md#reload)
- [``](webview.md#updatenavigationstate)
- [``](webview.md#getwebviewhandle)
- [``](webview.md#onloadingstart)
- [``](webview.md#onloadingerror)
- [``](webview.md#onloadingfinish)

---

# Reference

## Props

### ``

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

| Type                                                                       | Required |
| -------------------------------------------------------------------------- | -------- |
| object: {"{"}top: number, left: number, bottom: number, right: number{"}"} | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Sets the JS to be injected when the webpage loads.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

| Type                  | Required |
| --------------------- | -------- |
| [View](view.md#style) | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Used for android only, JS is enabled by default for WebView on iOS

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

Determines whether HTML5 videos play inline or use the native full-screen controller. default value `` **NOTE** : "In order for video to play inline, not only does this property need to be set to true, but the video element in the HTML document must also include the webkit-playsinline attribute."

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Allows custom handling of any webview requests by a JS handler. Return true or false from this method to continue loading the request.

| Type     | Required | Platform |
| -------- | -------- | -------- |
| function | No       | iOS      |

---

### ``

Sets whether the webpage scales to fit the view and the user can change the scale.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

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

We return an event with a bunch of fields including: url, title, loading, canGoBack, canGoForward

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

---

### ``

```jsx
```
