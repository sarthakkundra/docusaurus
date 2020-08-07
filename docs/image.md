---
id: image
title: Image
---

A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the `'data:'` uri scheme.

&gt; Note that for network and data images, you will need to manually specify the dimensions of your image!

## Examples

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

```SnackPlayer name=Function%20Component%20Example



```

```SnackPlayer name=Class%20Component%20Example



```

You can also add `` to an image:

      Function Component Example


      Class Component Example

```SnackPlayer name=Function%20Component%20Example



```

```SnackPlayer name=Class%20Component%20Example



```

## GIF and WebP support on Android

When building your own native code, GIF and WebP are not supported by default on Android.

You will need to add some optional modules in ``, depending on the needs of your app.

```gradle



```

---

# Reference

## Props

### ``

`is an` for different image resizing modes, set via the `style property on` components. The values are `,`, `,`, ``.

| Type  | Required |
| ----- | -------- |
| style | No       |

- [Image Style Props...](image-style-props#props)

- [Layout Props...](layout-props#props)

- [Shadow Props...](shadow-props#props)

- [Transforms...](transforms#props)

---

### ``

When true, indicates the image is an accessibility element.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

The text that's read by the screen reader when the user interacts with the image.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| string | No       | iOS      |

---

### ``

blurRadius: the blur radius of the blur filter added to the image

| Type   | Required |
| ------ | -------- |
| number | No       |

&gt; Tip : IOS you will need to increase `more than`

---

### ``

When the image is resized, the corners of the size specified by `` will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets. More info in the [official Apple documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets).

| Type         | Required | Platform |
| ------------ | -------- | -------- |
| [Rect](rect) | No       | iOS      |

---

### ``

A static image to display while loading the image source.

| Type           | Required | Platform |
| -------------- | -------- | -------- |
| object, number | No       | iOS      |
| number         | No       | Android  |

If passing an object, the general shape is ``:

- `- a string representing the resource identifier for the image, which should be either a local file path or the name of a static image resource (which should be wrapped in the` function).
- `,` - can be specified if known at build time, in which case these will be used to set the default `` component dimensions.
- `` - used to indicate the scale factor of the image. Defaults to 1.0 if unspecified, meaning that one image pixel equates to one display point / DIP.

If passing a number:

- `- Opaque type returned by something like`.

&gt; **Note:** On Android, the default source prop is ignored on debug builds.

---

### ``

Android only. By default, it is 300ms.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Similarly to ``, this property represents the resource used to render the loading indicator for the image, displayed until image is ready to be displayed, typically after when it got downloaded from network.

| Type                                  | Required |
| ------------------------------------- | -------- |
| array of ImageSourcePropTypes, number | No       |

&gt; Can accept a number as returned by ``

---

### ``

Invoked on load error with ``.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked on mount and layout changes with ``.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked when load completes successfully.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked when load either succeeds or fails.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked on load start.

e.g., ``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked when a partial load of the image is complete. The definition of what constitutes a "partial load" is loader specific though this is meant for progressive JPEG loads.

| Type     | Required | Platform |
| -------- | -------- | -------- |
| function | No       | iOS      |

---

### ``

Invoked on download progress with ``.

| Type     | Required | Platform |
| -------- | -------- | -------- |
| function | No       | iOS      |

---

### ``

Android only. When true, enables progressive jpeg streaming.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

The mechanism that should be used to resize the image when the image's dimensions differ from the image view's dimensions. Defaults to ``.

- `: Use heuristics to pick between` and ``.

- `: A software operation which changes the encoded image in memory before it gets decoded. This should be used instead of` when the image is much larger than the view.

- `: The image gets drawn downscaled or upscaled. Compared to`, `` is faster (usually hardware accelerated) and produces higher quality images. This should be used if the image is smaller than the view. It should also be used if the image is slightly bigger than the view.

More details about `and` can be found at .

| Type                            | Required | Platform |
| ------------------------------- | -------- | -------- |
| enum('auto', 'resize', 'scale') | No       | Android  |

---

### ``

Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to ``.

- ``: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).

- ``: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

- ``: Scale width and height independently, This may change the aspect ratio of the src.

- ``: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.

- ``: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

| Type                                                    | Required |
| ------------------------------------------------------- | -------- |
| enum('cover', 'contain', 'stretch', 'repeat', 'center') | No       |

---

### ``

The image source (either a remote URL or a local file resource).

This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best `to display based on the measured size of the image container. A` property can be added to control how networked request interacts with the local cache. (For more information see [Cache Control for Images](images#cache-control-ios-only)).

The currently supported formats are `,`, `,`, `,` (Android only), `` (iOS only). In addition, iOS supports several RAW image formats. Refer to Apple's documentation for the current list of supported camera models (for iOS 12, see ).

| Type                | Required |
| ------------------- | -------- |
| ImageSourcePropType | No       |

---

### ``

A unique identifier for this element to be used in UI Automation testing scripts.

| Type   | Required |
| ------ | -------- |
| string | No       |

## Methods

### ``

```jsx
```

Retrieve the width and height (in pixels) of an image prior to displaying it. This method can fail if the image cannot be found, or fails to download.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

**Parameters:**

| Name    | Type     | Required | Description                                                                                          |
| ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------- |
| uri     | string   | Yes      | The location of the image.                                                                           |
| success | function | Yes      | The function that will be called if the image was successfully found and width and height retrieved. |
| failure | function | No       | The function that will be called if there was an error, such as failing to retrieve the image.       |

---

### ``

```jsx
```

Retrieve the width and height (in pixels) of an image prior to displaying it with the ability to provide the headers for the request. This method can fail if the image cannot be found, or fails to download.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

Does not work for static image resources.

**Parameters:**

| Name    | Type     | Required | Description                                                                                          |
| ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------- |
| uri     | string   | Yes      | The location of the image.                                                                           |
| headers | object   | Yes      | The headers for the request.                                                                         |
| success | function | Yes      | The function that will be called if the image was successfully found and width and height retrieved. |
| failure | function | No       | The function that will be called if there was an error, such as failing toto retrieve the image.     |

---

### ``

```jsx
```

Prefetches a remote image for later use by downloading it to the disk cache

**Parameters:**

| Name | Type   | Required | Description                       |
| ---- | ------ | -------- | --------------------------------- |
| url  | string | Yes      | The remote location of the image. |

---

### ``

```jsx
```

Abort prefetch request. Android-only.

**Parameters:**

| Name      | Type   | Required | Description                  |
| --------- | ------ | -------- | ---------------------------- |
| requestId | number | Yes      | Id as returned by prefetch() |

---

### ``

```jsx
```

Perform cache interrogation. Returns a mapping from URL to cache status, such as "disk" or "memory". If a requested URL is not in the mapping, it means it's not in the cache.

**Parameters:**

| Name | Type  | Required | Description                                |
| ---- | ----- | -------- | ------------------------------------------ |
| urls | array | Yes      | List of image URLs to check the cache for. |

---

### ``

```jsx
```

Resolves an asset reference into an object which has the properties `,`, and ``.

**Parameters:**

| Name   | Type           | Required | Description                                                       |
| ------ | -------------- | -------- | ----------------------------------------------------------------- |
| source | number, object | Yes      | A number (opaque type returned by require('./foo.png')) or an ``. |

&gt; `is an object like`
