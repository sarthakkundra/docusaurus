---
id: animated
title: Animated
---

The `Animated` library is designed to make animations fluid, powerful, and painless to build and maintain. `Animated` focuses on declarative relationships between inputs and outputs, configurable transforms in between, and `start`/`stop` methods to control time-based animation execution.

The core workflow for creating an animation is to create an `Animated.Value`, hook it up to one or more style attributes of an animated component, and then drive updates via animations using `Animated.timing()`.

<div className="toggler">
  <ul role="tablist" className="toggle-syntax">
    <li id="functional" className="button-functional" aria-selected="false" role="tab" tabIndex={0} aria-controls="functionaltab" onClick="displayTabs('syntax', 'functional')">
      Using with Function Components
    </li>
    <li id="classical" className="button-classical" aria-selected="false" role="tab" tabIndex={0} aria-controls="classicaltab" onClick="displayTabs('syntax', 'classical')">
      Using with Class Components
    </li>
  </ul>
</div>

block

&gt; Don't modify the animated value directly. You can use the [`` Hook](https://reactjs.org/docs/hooks-reference.html#useref) to return a mutable ref object. This ref object's `` property is initialized as the given argument and persists throughout the component lifecycle.

&gt; Don't modify the animated value directly. It is usually stored as a [state variable](intro-react#state) in class components.

## Example

The following example contains a `which will fade in and fade out based on the animated value`

      Function Component Example


      Class Component Example

```SnackPlayer name=Animated



```

```SnackPlayer name=Animated



```

Refer to the [Animations](animations#animated-api) guide to see additional examples of `` in action.

## Overview

There are two value types you can use with ``:

- [``](animated#value) for single values
- [``](animated#valuexy) for vectors

`can bind to style properties or other props, and can be interpolated as well. A single` can drive any number of properties.

### Configuring animations

`` provides three types of animation types. Each animation type provides a particular animation curve that controls how your values animate from their initial value to the final value:

- [``](animated#decay) starts with an initial velocity and gradually slows to a stop.
- [``](animated#spring) provides a basic spring physics model.
- [``](animated#timing) animates a value over time using [easing functions](easing).

In most cases, you will be using ``. By default, it uses a symmetric easeInOut curve that conveys the gradual acceleration of an object to full speed and concludes by gradually decelerating to a stop.

### Working with animations

Animations are started by calling `on your animation.` takes a completion callback that will be called when the animation is done. If the animation finished running normally, the completion callback will be invoked with `. If the animation is done because` was called on it before it could finish (e.g. because it was interrupted by a gesture or another animation), then it will receive ``.

```jsx
```

### Using the native driver

By using the native driver, we send everything about the animation to native before starting the animation, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame. Once the animation has started, the JS thread can be blocked without affecting the animation.

You can use the native driver by specifying `` in your animation configuration. See the [Animations](animations#using-the-native-driver) guide to learn more.

### Animatable components

Only animatable components can be animated. These unique components do the magic of binding the animated values to the properties, and do targeted native updates to avoid the cost of the react render and reconciliation process on every frame. They also handle cleanup on unmount so they are safe by default.

- [``](animated#createanimatedcomponent) can be used to make a component animatable.

`` exports the following animatable components using the above wrapper:

- ``
- ``
- ``
- ``
- ``
- ``

### Composing animations

Animations can also be combined in complex ways using composition functions:

- [``](animated#delay) starts an animation after a given delay.
- [``](animated#parallel) starts a number of animations at the same time.
- [``](animated#sequence) starts the animations in order, waiting for each to complete before starting the next.
- [``](animated#stagger) starts animations in order and in parallel, but with successive delays.

Animations can also be chained together by setting the `of one animation to be another`. See [Tracking dynamic values](animations#tracking-dynamic-values) in the Animations guide.

By default, if one animation is stopped or interrupted, then all other animations in the group are also stopped.

### Combining animated values

You can combine two animated values via addition, subtraction, multiplication, division, or modulo to make a new animated value:

- [``](animated#add)
- [``](animated#subtract)
- [``](animated#divide)
- [``](animated#modulo)
- [``](animated#multiply)

### Interpolation

The `` function allows input ranges to map to different output ranges. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value. It uses linear interpolation by default but also supports easing functions.

- [``](animated#interpolate)

Read more about interpolation in the [Animation](animations#interpolation) guide.

### Handling gestures and other events

Gestures, like panning or scrolling, and other events can map directly to animated values using ``. This is done with a structured map syntax so that values can be extracted from complex event objects. The first level is an array to allow mapping across multiple args, and that array contains nested objects.

- [``](animated#event)

For example, when working with horizontal scrolling gestures, you would do the following in order to map `to` (an ``):

```jsx
```

---

# Reference

## Methods

When the given value is a ValueXY instead of a Value, each config option may be a vector of the form `` instead of a scalar.

### ``

```jsx
```

Animates a value from an initial velocity to zero based on a decay coefficient.

Config is an object that may have the following options:

- ``: Initial velocity. Required.
- ``: Rate of decay. Default 0.997.
- `: Whether or not this animation creates an "interaction handle" on the`. Default true.
- ``: Uses the native driver when true. Default false.

---

### ``

```jsx
```

Animates a value along a timed easing curve. The [``](easing) module has tons of predefined curves, or you can use your own function.

Config is an object that may have the following options:

- ``: Length of animation (milliseconds). Default 500.
- `: Easing function to define curve. Default is`.
- ``: Start the animation after delay (milliseconds). Default 0.
- `: Whether or not this animation creates an "interaction handle" on the`. Default true.
- ``: Uses the native driver when true. Default false.

---

### ``

```jsx
```

Animates a value according to an analytical spring model based on [damped harmonic oscillation](https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator). Tracks velocity state to create fluid motions as the `` updates, and can be chained together.

Config is an object that may have the following options.

Note that you can only define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one:

The friction/tension or bounciness/speed options match the spring model in [``](https://github.com/facebook/pop), [Rebound](http://facebook.github.io/rebound/), and [Origami](http://origami.design/).

- ``: Controls "bounciness"/overshoot. Default 7.
- ``: Controls speed. Default 40.
- ``: Controls speed of the animation. Default 12.
- ``: Controls bounciness. Default 8.

Specifying stiffness/damping/mass as parameters makes `` use an analytical spring model based on the motion equations of a [damped harmonic oscillator](https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator). This behavior is slightly more precise and faithful to the physics behind spring dynamics, and closely mimics the implementation in iOS's CASpringAnimation.

- ``: The spring stiffness coefficient. Default 100.
- ``: Defines how the spring’s motion should be damped due to the forces of friction. Default 10.
- ``: The mass of the object attached to the end of the spring. Default 1.

Other configuration options are as follows:

- ``: The initial velocity of the object attached to the spring. Default 0 (object is at rest).
- ``: Boolean indicating whether the spring should be clamped and not bounce. Default false.
- ``: The threshold of displacement from rest below which the spring should be considered at rest. Default 0.001.
- ``: The speed at which the spring should be considered at rest in pixels per second. Default 0.001.
- ``: Start the animation after delay (milliseconds). Default 0.
- `: Whether or not this animation creates an "interaction handle" on the`. Default true.
- ``: Uses the native driver when true. Default false.

---

### ``

```jsx
```

Creates a new Animated value composed from two Animated values added together.

---

### ``

```jsx
```

Creates a new Animated value composed by subtracting the second Animated value from the first Animated value.

---

### ``

```jsx
```

Creates a new Animated value composed by dividing the first Animated value by the second Animated value.

---

### ``

```jsx
```

Creates a new Animated value composed from two Animated values multiplied together.

---

### ``

```jsx
```

Creates a new Animated value that is the (non-negative) modulo of the provided Animated value

---

### ``

```jsx
```

Create a new Animated value that is limited between 2 values. It uses the difference between the last value so even if the value is far from the bounds it will start changing when the value starts getting closer again. (``).

This is useful with scroll events, for example, to show the navbar when scrolling up and to hide it when scrolling down.

---

### ``

```jsx
```

Starts an animation after the given delay.

---

### ``

```jsx
```

Starts an array of animations in order, waiting for each to complete before starting the next. If the current running animation is stopped, no following animations will be started.

---

### ``

```jsx
```

Starts an array of animations all at the same time. By default, if one of the animations is stopped, they will all be stopped. You can override this with the `` flag.

---

### ``

```jsx
```

Array of animations may run in parallel (overlap), but are started in sequence with successive delays. Nice for doing trailing effects.

---

### ``

```jsx
```

Loops a given animation continuously, so that each time it reaches the end, it resets and begins again from the start. Will loop without blocking the JS thread if the child animation is set to `. In addition, loops can prevent`-based components from rendering more rows while the animation is running. You can pass `` in the child animation config to fix this.

Config is an object that may have the following options:

- `: Number of times the animation should loop. Default` (infinite).

---

### ``

```jsx
```

Takes an array of mappings and extracts values from each arg accordingly, then calls `` on the mapped outputs. e.g.

```jsx
```

Config is an object that may have the following options:

- ``: Optional async listener.
- ``: Uses the native driver when true. Default false.

---

### ``

```jsx
```

Advanced imperative API for snooping on animated events that are passed in through props. It permits to add a new javascript listener to an existing `. If` is a javascript listener, it will merge the 2 listeners into a single one, and if `` is null/undefined, it will assign the javascript listener directly. Use values directly where possible.

---

### ``

```jsx
```

---

### ``

```jsx
```

Animations are started by calling start() on your animation. start() takes a completion callback that will be called when the animation is done or when the animation is done because stop() was called on it before it could finish.

**Parameters:**

| Name     | Type                                    | Required | Description                                                                                                                                                     |
| -------- | --------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| callback | ?(result?: {"{"}finished: boolean{"}"}) | No       | Function that will be called after the animation finished running normally or when the animation is done because stop() was called on it before it could finish |

Start example with callback:

```jsx
```

---

### ``

```jsx
```

Stops any running animation.

---

### ``

```jsx
```

Stops any running animation and resets the value to its original.

## Properties

### ``

Standard value class for driving animations. Typically initialized with ``

You can read more about `` API on the separate [page](animatedvalue).

---

### ``

2D value class for driving 2D animations, such as pan gestures.

You can read more about `` API on the separate [page](animatedvaluexy).

---

### ``

Exported to use the Interpolation type in flow.

---

### ``

Exported for ease of type checking. All animated values derive from this class.

---

### ``

Make any React component Animatable. Used to create ``, etc.

---

### ``

Imperative API to attach an animated value to an event on a view. Prefer using `with` if possible.
