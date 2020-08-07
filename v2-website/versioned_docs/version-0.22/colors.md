---
id: colors
title: Color Reference
original_id: colors
---

Components in React Native are [styled using JavaScript](style.md). Color properties usually match how [CSS works on the web](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

### Red-green-blue

React Native supports `rgb()` and `rgba()` in both hexadecimal and functional notation:

- `'#f0f'` (#rgb)

- `'#ff00ff'` (#rrggbb)

- `'rgb(255, 0, 255)'`

- `'rgba(255, 255, 255, 1.0)'`

- `'#f0ff'` (#rgba)

- `'#ff00ff00'` (#rrggbbaa)

### Hue-saturation-lightness

`hsl()` and `hsla()` is supported in functional notation:

- `'hsl(360, 100%, 100%)'`
- `'hsla(360, 100%, 100%, 1.0)'`

### `transparent`

This is a shortcut for `rgba(0,0,0,0)`:

- `'transparent'`

### Named colors

You can also use color names as values. React Native follows the [CSS3 specification](http://www.w3.org/TR/css3-color/#svg-color):

alex ignore white

- ![#f0f8ff](https://placehold.it/15/f0f8ff/000000?text=+) color aliceblue (#f0f8ff)
- ![#faebd7](https://placehold.it/15/faebd7/000000?text=+) antiquewhite (#faebd7)
- ![#00ffff](https://placehold.it/15/00ffff/000000?text=+) aqua (#00ffff)
- ![#7fffd4](https://placehold.it/15/7fffd4/000000?text=+) aquamarine (#7fffd4)
- ![#f0ffff](https://placehold.it/15/f0ffff/000000?text=+) azure (#f0ffff)
- ![#f5f5dc](https://placehold.it/15/f5f5dc/000000?text=+) beige (#f5f5dc)
- ![#ffe4c4](https://placehold.it/15/ffe4c4/000000?text=+) bisque (#ffe4c4)
- ![#000000](https://placehold.it/15/000000/000000?text=+) black (#000000)
- ![#ffebcd](https://placehold.it/15/ffebcd/000000?text=+) blanchedalmond (#ffebcd)
- ![#0000ff](https://placehold.it/15/0000ff/000000?text=+) blue (#0000ff)
- ![#8a2be2](https://placehold.it/15/8a2be2/000000?text=+) blueviolet (#8a2be2)
- ![#a52a2a](https://placehold.it/15/a52a2a/000000?text=+) brown (#a52a2a)
- ![#deb887](https://placehold.it/15/deb887/000000?text=+) burlywood (#deb887)
- ![#5f9ea0](https://placehold.it/15/5f9ea0/000000?text=+) cadetblue (#5f9ea0)
- ![#7fff00](https://placehold.it/15/7fff00/000000?text=+) chartreuse (#7fff00)
- ![#d2691e](https://placehold.it/15/d2691e/000000?text=+) chocolate (#d2691e)
- ![#ff7f50](https://placehold.it/15/ff7f50/000000?text=+) coral (#ff7f50)
- ![#6495ed](https://placehold.it/15/6495ed/000000?text=+) cornflowerblue (#6495ed)
- ![#fff8dc](https://placehold.it/15/fff8dc/000000?text=+) cornsilk (#fff8dc)
- ![#dc143c](https://placehold.it/15/dc143c/000000?text=+) crimson (#dc143c)
- ![#00ffff](https://placehold.it/15/00ffff/000000?text=+) cyan (#00ffff)
- ![#00008b](https://placehold.it/15/00008b/000000?text=+) darkblue (#00008b)
- ![#008b8b](https://placehold.it/15/008b8b/000000?text=+) darkcyan (#008b8b)
- ![#b8860b](https://placehold.it/15/b8860b/000000?text=+) darkgoldenrod (#b8860b)
- ![#a9a9a9](https://placehold.it/15/a9a9a9/000000?text=+) darkgray (#a9a9a9)
- ![#006400](https://placehold.it/15/006400/000000?text=+) darkgreen (#006400)
- ![#a9a9a9](https://placehold.it/15/a9a9a9/000000?text=+) darkgrey (#a9a9a9)
- ![#bdb76b](https://placehold.it/15/bdb76b/000000?text=+) darkkhaki (#bdb76b)
- ![#8b008b](https://placehold.it/15/8b008b/000000?text=+) darkmagenta (#8b008b)
- ![#556b2f](https://placehold.it/15/556b2f/000000?text=+) darkolivegreen (#556b2f)
- ![#ff8c00](https://placehold.it/15/ff8c00/000000?text=+) darkorange (#ff8c00)
- ![#9932cc](https://placehold.it/15/9932cc/000000?text=+) darkorchid (#9932cc)
- ![#8b0000](https://placehold.it/15/8b0000/000000?text=+) darkred (#8b0000)
- ![#e9967a](https://placehold.it/15/e9967a/000000?text=+) darksalmon (#e9967a)
- ![#8fbc8f](https://placehold.it/15/8fbc8f/000000?text=+) darkseagreen (#8fbc8f)
- ![#483d8b](https://placehold.it/15/483d8b/000000?text=+) darkslateblue (#483d8b)
- ![#2f4f4f](https://placehold.it/15/2f4f4f/000000?text=+) darkslategrey (#2f4f4f)
- ![#00ced1](https://placehold.it/15/00ced1/000000?text=+) darkturquoise (#00ced1)
- ![#9400d3](https://placehold.it/15/9400d3/000000?text=+) darkviolet (#9400d3)
- ![#ff1493](https://placehold.it/15/ff1493/000000?text=+) deeppink (#ff1493)
- ![#00bfff](https://placehold.it/15/00bfff/000000?text=+) deepskyblue (#00bfff)
- ![#696969](https://placehold.it/15/696969/000000?text=+) dimgray (#696969)
- ![#696969](https://placehold.it/15/696969/000000?text=+) dimgrey (#696969)
- ![#1e90ff](https://placehold.it/15/1e90ff/000000?text=+) dodgerblue (#1e90ff)
- ![#b22222](https://placehold.it/15/b22222/000000?text=+) firebrick (#b22222)
- ![#fffaf0](https://placehold.it/15/fffaf0/000000?text=+) floralwhite (#fffaf0)
- ![#228b22](https://placehold.it/15/228b22/000000?text=+) forestgreen (#228b22)
- ![#ff00ff](https://placehold.it/15/ff00ff/000000?text=+) fuchsia (#ff00ff)
- ![#dcdcdc](https://placehold.it/15/dcdcdc/000000?text=+) gainsboro (#dcdcdc)
- ![#f8f8ff](https://placehold.it/15/f8f8ff/000000?text=+) ghostwhite (#f8f8ff)
- ![#ffd700](https://placehold.it/15/ffd700/000000?text=+) gold (#ffd700)
- ![#daa520](https://placehold.it/15/daa520/000000?text=+) goldenrod (#daa520)
- ![#808080](https://placehold.it/15/808080/000000?text=+) gray (#808080)
- ![#008000](https://placehold.it/15/008000/000000?text=+) green (#008000)
- ![#adff2f](https://placehold.it/15/adff2f/000000?text=+) greenyellow (#adff2f)
- ![#808080](https://placehold.it/15/808080/000000?text=+) grey (#808080)
- ![#f0fff0](https://placehold.it/15/f0fff0/000000?text=+) honeydew (#f0fff0)
- ![#ff69b4](https://placehold.it/15/ff69b4/000000?text=+) hotpink (#ff69b4)
- ![#cd5c5c](https://placehold.it/15/cd5c5c/000000?text=+) indianred (#cd5c5c)
- ![#4b0082](https://placehold.it/15/4b0082/000000?text=+) indigo (#4b0082)
- ![#fffff0](https://placehold.it/15/fffff0/000000?text=+) ivory (#fffff0)
- ![#f0e68c](https://placehold.it/15/f0e68c/000000?text=+) khaki (#f0e68c)
- ![#e6e6fa](https://placehold.it/15/e6e6fa/000000?text=+) lavender (#e6e6fa)
- ![#fff0f5](https://placehold.it/15/fff0f5/000000?text=+) lavenderblush (#fff0f5)
- ![#7cfc00](https://placehold.it/15/7cfc00/000000?text=+) lawngreen (#7cfc00)
- ![#fffacd](https://placehold.it/15/fffacd/000000?text=+) lemonchiffon (#fffacd)
- ![#add8e6](https://placehold.it/15/add8e6/000000?text=+) lightblue (#add8e6)
- ![#f08080](https://placehold.it/15/f08080/000000?text=+) lightcoral (#f08080)
- ![#e0ffff](https://placehold.it/15/e0ffff/000000?text=+) lightcyan (#e0ffff)
- ![#fafad2](https://placehold.it/15/fafad2/000000?text=+) lightgoldenrodyellow (#fafad2)
- ![#d3d3d3](https://placehold.it/15/d3d3d3/000000?text=+) lightgray (#d3d3d3)
- ![#90ee90](https://placehold.it/15/90ee90/000000?text=+) lightgreen (#90ee90)
- ![#d3d3d3](https://placehold.it/15/d3d3d3/000000?text=+) lightgrey (#d3d3d3)
- ![#ffb6c1](https://placehold.it/15/ffb6c1/000000?text=+) lightpink (#ffb6c1)
- ![#ffa07a](https://placehold.it/15/ffa07a/000000?text=+) lightsalmon (#ffa07a)
- ![#20b2aa](https://placehold.it/15/20b2aa/000000?text=+) lightseagreen (#20b2aa)
- ![#87cefa](https://placehold.it/15/87cefa/000000?text=+) lightskyblue (#87cefa)
- ![#778899](https://placehold.it/15/778899/000000?text=+) lightslategrey (#778899)
- ![#b0c4de](https://placehold.it/15/b0c4de/000000?text=+) lightsteelblue (#b0c4de)
- ![#ffffe0](https://placehold.it/15/ffffe0/000000?text=+) lightyellow (#ffffe0)
- ![#00ff00](https://placehold.it/15/00ff00/000000?text=+) lime (#00ff00)
- ![#32cd32](https://placehold.it/15/32cd32/000000?text=+) limegreen (#32cd32)
- ![#faf0e6](https://placehold.it/15/faf0e6/000000?text=+) linen (#faf0e6)
- ![#ff00ff](https://placehold.it/15/ff00ff/000000?text=+) magenta (#ff00ff)
- ![#800000](https://placehold.it/15/800000/000000?text=+) maroon (#800000)
- ![#66cdaa](https://placehold.it/15/66cdaa/000000?text=+) mediumaquamarine (#66cdaa)
- ![#0000cd](https://placehold.it/15/0000cd/000000?text=+) mediumblue (#0000cd)
- ![#ba55d3](https://placehold.it/15/ba55d3/000000?text=+) mediumorchid (#ba55d3)
- ![#9370db](https://placehold.it/15/9370db/000000?text=+) mediumpurple (#9370db)
- ![#3cb371](https://placehold.it/15/3cb371/000000?text=+) mediumseagreen (#3cb371)
- ![#7b68ee](https://placehold.it/15/7b68ee/000000?text=+) mediumslateblue (#7b68ee)
- ![#00fa9a](https://placehold.it/15/00fa9a/000000?text=+) mediumspringgreen (#00fa9a)
- ![#48d1cc](https://placehold.it/15/48d1cc/000000?text=+) mediumturquoise (#48d1cc)
- ![#c71585](https://placehold.it/15/c71585/000000?text=+) mediumvioletred (#c71585)
- ![#191970](https://placehold.it/15/191970/000000?text=+) midnightblue (#191970)
- ![#f5fffa](https://placehold.it/15/f5fffa/000000?text=+) mintcream (#f5fffa)
- ![#ffe4e1](https://placehold.it/15/ffe4e1/000000?text=+) mistyrose (#ffe4e1)
- ![#ffe4b5](https://placehold.it/15/ffe4b5/000000?text=+) moccasin (#ffe4b5)
- ![#ffdead](https://placehold.it/15/ffdead/000000?text=+) navajowhite (#ffdead)
- ![#000080](https://placehold.it/15/000080/000000?text=+) navy (#000080)
- ![#fdf5e6](https://placehold.it/15/fdf5e6/000000?text=+) oldlace (#fdf5e6)
- ![#808000](https://placehold.it/15/808000/000000?text=+) olive (#808000)
- ![#6b8e23](https://placehold.it/15/6b8e23/000000?text=+) olivedrab (#6b8e23)
- ![#ffa500](https://placehold.it/15/ffa500/000000?text=+) orange (#ffa500)
- ![#ff4500](https://placehold.it/15/ff4500/000000?text=+) orangered (#ff4500)
- ![#da70d6](https://placehold.it/15/da70d6/000000?text=+) orchid (#da70d6)
- ![#eee8aa](https://placehold.it/15/eee8aa/000000?text=+) palegoldenrod (#eee8aa)
- ![#98fb98](https://placehold.it/15/98fb98/000000?text=+) palegreen (#98fb98)
- ![#afeeee](https://placehold.it/15/afeeee/000000?text=+) paleturquoise (#afeeee)
- ![#db7093](https://placehold.it/15/db7093/000000?text=+) palevioletred (#db7093)
- ![#ffefd5](https://placehold.it/15/ffefd5/000000?text=+) papayawhip (#ffefd5)
- ![#ffdab9](https://placehold.it/15/ffdab9/000000?text=+) peachpuff (#ffdab9)
- ![#cd853f](https://placehold.it/15/cd853f/000000?text=+) peru (#cd853f)
- ![#ffc0cb](https://placehold.it/15/ffc0cb/000000?text=+) pink (#ffc0cb)
- ![#dda0dd](https://placehold.it/15/dda0dd/000000?text=+) plum (#dda0dd)
- ![#b0e0e6](https://placehold.it/15/b0e0e6/000000?text=+) powderblue (#b0e0e6)
- ![#800080](https://placehold.it/15/800080/000000?text=+) purple (#800080)
- ![#663399](https://placehold.it/15/663399/000000?text=+) rebeccapurple (#663399)
- ![#ff0000](https://placehold.it/15/ff0000/000000?text=+) red (#ff0000)
- ![#bc8f8f](https://placehold.it/15/bc8f8f/000000?text=+) rosybrown (#bc8f8f)
- ![#4169e1](https://placehold.it/15/4169e1/000000?text=+) royalblue (#4169e1)
- ![#8b4513](https://placehold.it/15/8b4513/000000?text=+) saddlebrown (#8b4513)
- ![#fa8072](https://placehold.it/15/fa8072/000000?text=+) salmon (#fa8072)
- ![#f4a460](https://placehold.it/15/f4a460/000000?text=+) sandybrown (#f4a460)
- ![#2e8b57](https://placehold.it/15/2e8b57/000000?text=+) seagreen (#2e8b57)
- ![#fff5ee](https://placehold.it/15/fff5ee/000000?text=+) seashell (#fff5ee)
- ![#a0522d](https://placehold.it/15/a0522d/000000?text=+) sienna (#a0522d)
- ![#c0c0c0](https://placehold.it/15/c0c0c0/000000?text=+) silver (#c0c0c0)
- ![#87ceeb](https://placehold.it/15/87ceeb/000000?text=+) skyblue (#87ceeb)
- ![#6a5acd](https://placehold.it/15/6a5acd/000000?text=+) slateblue (#6a5acd)
- ![#708090](https://placehold.it/15/708090/000000?text=+) slategray (#708090)
- ![#fffafa](https://placehold.it/15/fffafa/000000?text=+) snow (#fffafa)
- ![#00ff7f](https://placehold.it/15/00ff7f/000000?text=+) springgreen (#00ff7f)
- ![#4682b4](https://placehold.it/15/4682b4/000000?text=+) steelblue (#4682b4)
- ![#d2b48c](https://placehold.it/15/d2b48c/000000?text=+) tan (#d2b48c)
- ![#008080](https://placehold.it/15/008080/000000?text=+) teal (#008080)
- ![#d8bfd8](https://placehold.it/15/d8bfd8/000000?text=+) thistle (#d8bfd8)
- ![#ff6347](https://placehold.it/15/ff6347/000000?text=+) tomato (#ff6347)
- ![#40e0d0](https://placehold.it/15/40e0d0/000000?text=+) turquoise (#40e0d0)
- ![#ee82ee](https://placehold.it/15/ee82ee/000000?text=+) violet (#ee82ee)
- ![#f5deb3](https://placehold.it/15/f5deb3/000000?text=+) wheat (#f5deb3)
- ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) white (#ffffff)
- ![#f5f5f5](https://placehold.it/15/f5f5f5/000000?text=+) whitesmoke (#f5f5f5)
- ![#ffff00](https://placehold.it/15/ffff00/000000?text=+) yellow (#ffff00)
- ![#9acd32](https://placehold.it/15/9acd32/000000?text=+) yellowgreen (#9acd32)
