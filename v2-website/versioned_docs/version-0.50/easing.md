---
id: easing
title: Easing
original_id: easing
---

The `Easing` module implements common easing functions. This module is used by [Animated.timing()](animated.md#timing) to convey physically believable motion in animations.

You can find a visualization of some common easing functions at http:

### Predefined animations

The `` module provides several predefined animations through the following methods:

- [``](easing.md#back) provides an animation where the object goes slightly back before moving forward
- [``](easing.md#bounce) provides a bouncing animation
- [``](easing.md#ease) provides an inertial animation
- [``](easing.md#elastic) provides a spring interaction

### Standard functions

Three standard easing functions are provided:

- [``](easing.md#linear)
- [``](easing.md#quad)
- [``](easing.md#cubic)

The [``](easing.md#poly) function can be used to implement quartic, quintic, and other higher power functions.

### Additional functions

Additional mathematical functions are provided by the following methods:

- [``](easing.md#bezier) provides a cubic bezier curve
- [``](easing.md#circle) provides a circular function
- [``](easing.md#sin) provides a sinusoidal function
- [``](easing.md#exp) provides an exponential function

The following helpers are used to modify other easing functions.

- [``](easing.md#in) runs an easing function forwards
- [``](easing.md#inout) makes any easing function symmetrical
- [``](easing.md#out) runs an easing function backwards

### Methods

- [``](easing.md#step0)
- [``](easing.md#step1)
- [``](easing.md#linear)
- [``](easing.md#ease)
- [``](easing.md#quad)
- [``](easing.md#cubic)
- [``](easing.md#poly)
- [``](easing.md#sin)
- [``](easing.md#circle)
- [``](easing.md#exp)
- [``](easing.md#elastic)
- [``](easing.md#back)
- [``](easing.md#bounce)
- [``](easing.md#bezier)
- [``](easing.md#in)
- [``](easing.md#out)
- [``](easing.md#inout)

---

# Reference

## Methods

### ``

```jsx
```

A stepping function, returns 1 for any positive value of ``.

---

### ``

```jsx
```

A stepping function, returns 1 if `` is greater than or equal to 1.

---

### ``

```jsx
```

A linear function, ``. Position correlates to elapsed time one to one.

---

### ``

```jsx
```

An inertial interaction, similar to an object slowly accelerating to speed.

---

### ``

```jsx
```

A quadratic function, ``. Position equals the square of elapsed time.

---

### ``

```jsx
```

A cubic function, ``. Position equals the cube of elapsed time.

---

### ``

```jsx
```

A power function. Position is equal to the Nth power of elapsed time.

n = 4: n = 5:

---

### ``

```jsx
```

A sinusoidal function.

---

### ``

```jsx
```

A circular function.

---

### ``

```jsx
```

An exponential function.

---

### ``

```jsx
```

An elastic interaction, similar to a spring oscillating back and forth.

Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N &gt; 1 will overshoot about N times.

Wolfram Plots:

- (bounciness = 1, default)
- (bounciness = 3)

---

### ``

```jsx
```

Use with `` to create an effect where the object animates back slightly as the animation starts.

Wolfram Plot:

- (s = 1.70158, default)

---

### ``

```jsx
```

Provides a bouncing effect.

---

### ``

```jsx
```

Provides a cubic bezier curve, equivalent to CSS Transitions' ``.

A useful tool to visualize cubic bezier curves can be found at

---

### ``

```jsx
```

Runs an easing function forwards.

---

### ``

```jsx
```

Runs an easing function backwards.

---

### ``

```jsx
```

Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration.
