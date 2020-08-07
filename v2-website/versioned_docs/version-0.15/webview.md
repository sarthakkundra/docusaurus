---
id: webview
title: WebView
original_id: webview
---

Renders a native WebView.

Note that WebView is only supported on iOS for now, see https:

### Props

- [``](webview.md#onshouldstartloadwithrequest)
- [``](webview.md#automaticallyadjustcontentinsets)
- [``](webview.md#contentinset)
- [``](webview.md#html)
- [``](webview.md#injectedjavascript)
- [``](webview.md#javascriptenabledandroid)
- [``](webview.md#onnavigationstatechange)
- [``](webview.md#bounces)
- [``](webview.md#rendererror)
- [``](webview.md#renderloading)
- [``](webview.md#scalespagetofit)
- [``](webview.md#scrollenabled)
- [``](webview.md#startinloadingstate)
- [``](webview.md#style)
- [``](webview.md#url)

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

Allows custom handling of any webview requests by a JS handler. Return true or false from this method to continue loading the request.

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

Used for android only, JS is enabled by default for WebView on iOS

| Type | Required |
| ---- | -------- |
| bool | No       |

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

Used for iOS only, sets whether the webpage scales to fit the view and the user can change the scale

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
