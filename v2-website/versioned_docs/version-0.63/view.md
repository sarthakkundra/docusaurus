---
id: view
title: View
original_id: view
---

The most fundamental component for building a UI, `View` is a container that supports layout with [flexbox](flexbox.md), [style](style.md), [some touch handling](handling-touches.md), and [accessibility](accessibility.md) controls. `View` maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a `UIView`, `<div>`, `android.view`, etc.

`View` is designed to be nested inside other views and can have 0 to many children of any type.

This example creates a `View` that wraps two boxes with color and a text component in a row with padding.

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

```SnackPlayer name=View%20Function%20Component%20Example



```

```SnackPlayer name=View%20Class%20Component%20Example



```

&gt; `s are designed to be used with [`](style.md) for clarity and performance, although inline styles are also supported.

### Synthetic Touch Events

For `responder props (e.g.,`), the synthetic touch event passed to them are in form of [PressEvent](pressevent).

---

# Reference

## Props

### ``

Does this view want to become responder on the start of a touch?

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

When ``, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `` nodes separated by space.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

`` communicates the purpose of a component to the user of an assistive technology.

`` can be one of the following:

- `` - Used when the element has no role.
- `` - Used when the element should be treated as a button.
- `` - Used when the element should be treated as a link.
- `` - Used when the text field element should also be treated as a search field.
- `` - Used when the element should be treated as an image. Can be combined with button or link, for example.
- `` - Used when the element acts as a keyboard key.
- `` - Used when the element should be treated as static text that cannot change.
- `` - Used when an element can be "adjusted" (e.g. a slider).
- `` - Used when the element should be treated as a button and is also an image.
- `` - Used when an element acts as a header for a content section (e.g. the title of a navigation bar).
- `` - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches.
- `` - Used when an element contains important text to be presented to the user.
- `` - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.
- `` - Used when an element represents a combo box, which allows the user to select among several choices.
- `` - Used when the component is a menu of choices.
- `` - Used when a component is a container of multiple menus.
- `` - Used to represent an item within a menu.
- `` - Used to represent a component which indicates progress of a task.
- `` - Used to represent a radio button.
- `` - Used to represent a group of radio buttons.
- `` - Used to represent a scroll bar.
- `` - Used to represent a button which opens a list of choices.
- `` - Used to represent a switch which can be turned on and off.
- `` - Used to represent a tab.
- `` - Used to represent a list of tabs.
- `` - Used to represent a timer.
- `` - Used to represent a tool bar (a container of action buttons or components).

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Describes the current state of a component to the user of an assistive technology.

See the [Accessibility guide](accessibility.md#accessibilitystate-ios-android) for more information.

| Type                                                                                                   | Required |
| ------------------------------------------------------------------------------------------------------ | -------- |
| object: {"{"}disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool{"}"} | No       |

---

### ``

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).

See the [Accessibility guide](accessibility.md#accessibilityvalue-ios-android) for more information.

| Type                                                                  | Required |
| --------------------------------------------------------------------- | -------- |
| object: {"{"}min: number, max: number, now: number, text: string{"}"} | No       |

---

### ``

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The `` property should contain a list of action objects. Each action object should contain the field name and label.

See the [Accessibility guide](accessibility.md#accessibility-actions) for more information.

| Type  | Required |
| ----- | -------- |
| array | No       |

---

### ``

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the [Accessibility guide](accessibility.md#accessibility-actions) for more information.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

When `` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

When `is`, the system will invoke this function when the user performs the magic tap gesture.

| Type     | Required | Platform |
| -------- | -------- | -------- |
| function | No       | iOS      |

---

### ``

When `is`, the system will invoke this function when the user performs the escape gesture.

| Type     | Required | Platform |
| -------- | -------- | -------- |
| function | No       | iOS      |

---

### ``

A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is ``.

See the [Accessibility guide](accessibility.md#accessibilityviewismodal-ios) for more information.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is ``.

See the [Accessibility guide](accessibility.md#accessibilityelementshidden-ios) for more information.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

A value indicating this view should or should not be inverted when color inversion is turned on. A value of `` will tell the view to not be inverted even if color inversion is turned on.

See the [Accessibility guide](accessibility.md#accessibilityignoresinvertcolors) for more information.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API &gt;= 19 only. Possible values:

- `` - Accessibility services should not announce changes to this view.
- ``- Accessibility services should announce changes to this view.
- `` - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.

See the [Android `` docs](http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion) for reference.

| Type                                | Required | Platform |
| ----------------------------------- | -------- | -------- |
| enum('none', 'polite', 'assertive') | No       | Android  |

---

### ``

Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.

Possible values:

- `` - The system determines whether the view is important for accessibility - default (recommended).
- `` - The view is important for accessibility.
- `` - The view is not important for accessibility.
- `` - The view is not important for accessibility, nor are any of its descendant views.

See the [Android `` docs](http://developer.android.com/reference/android/R.attr.html#importantForAccessibility) for reference.

| Type                                             | Required | Platform |
| ------------------------------------------------ | -------- | -------- |
| enum('auto', 'yes', 'no', 'no-hide-descendants') | No       | Android  |

---

### ``

This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.

For example, if a touchable view has a height of 20 the touchable height can be extended to 40 with ``

&gt; The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

| Type                                                                       | Required |
| -------------------------------------------------------------------------- | -------- |
| object: {"{"}top: number, left: number, bottom: number, right: number{"}"} | No       |

---

### ``

Used to locate this view from native classes.

&gt; This disables the 'layout-only view removal' optimization for this view!

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Invoked on mount and layout changes with:

``

This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `` when it is not the responder.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

If a parent `wants to prevent a child` from becoming responder on a move, it should have this handler which returns ``.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The user is moving their finger.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Another responder is already active and will not release it to that `` asking to be the responder.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Fired at the end of the touch.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The responder has been taken from the `. Might be taken by other views after a call to`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Some other `wants to become responder and is asking this` to release its responder. Returning `` allows its release.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

If a parent `wants to prevent a child` from becoming responder on a touch start, it should have this handler which returns ``.

`, where` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Controls whether the `` can be the target of touch events.

- ``: The View can be the target of touch events.
- ``: The View is never the target of touch events.
- ``: The View is never the target of touch events but its subviews can be. It behaves like if the view had the following classes in CSS:

```



```

- ``: The view can be the target of touch events but its subviews cannot be. It behaves like if the view had the following classes in CSS:

```



```

&gt; Since `does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include` on `. On some platforms, we would need to implement it as a` anyways. Using `` or not is an implementation detail of the platform.

| Type                                         | Required |
| -------------------------------------------- | -------- |
| enum('box-none', 'none', 'box-only', 'auto') | No       |

---

### ``

This is a reserved performance property exposed by `and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have`, as should the containing view (or one of its superviews).

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

| Type                               | Required |
| ---------------------------------- | -------- |
| [view styles](view-style-props.md) | No       |

---

### ``

Used to locate this view in end-to-end tests.

&gt; This disables the 'layout-only view removal' optimization for this view!

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `to disable this optimization and ensure that this` exists in the native view hierarchy.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

Whether this `needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (`) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the `you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping`s, or text and a background).

Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view **contents** are static (i.e. it doesn't need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Whether this `` should render itself (and all of its children) into a single hardware texture on the GPU.

On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

Whether this `` should be rendered as a bitmap before compositing.

On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.

Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Designates the next view to receive focus when the user navigates down. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown).

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Designates the next view to receive focus when the user navigates forward. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward).

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Designates the next view to receive focus when the user navigates left. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft).

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Designates the next view to receive focus when the user navigates right. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight).

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Designates the next view to receive focus when the user navigates up. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp).

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Whether this `` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

| Type    | Required | Platform |
| ------- | -------- | -------- |
| boolean | No       | Android  |
