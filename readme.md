# Simple Starter
A simple starter for web development using native technologies.

![Simple-Starter](https://raw.githubusercontent.com/agragregra/Simple-Starter/main/img/preview.png)
```
git clone https://github.com/agragregra/Simple-Starter .; rm -rf trunk .gitignore .git
```

> run with **Live Server**

## Helpers

### font-weight:
```
100 - Thin (Hairline)
200 - Extra Light (Ultra Light)
300 - Light
400 - Regular (Normal)
500 - Medium
600 - Semi Bold (Demi Bold)
700 - Bold
800 - Extra Bold (Ultra Bold)
900 - Black (Heavy)
```

### grid-breakpoints:
```
xs  - 0
sm  - 576px
md  - 768px
lg  - 992px
xl  - 1200px
xxl - 1400px
```

### responsive classes:
```
.container,
.row,
col-{breakpoint}-{1-12},
.d-{breakpoint}-{none, block, inline-block, flex, inline-flex}
```

### light-dark switcher:
```
<span data-mode="light">Light</span>
<span data-mode="dark">Dark</span>
<span data-mode="auto">Auto</span>
```

### switcher selector:
```
[data-mode].active {

}
```

### root mode selectors:
```
html.light {

}
html.dark {

}
```

### desktop-first:
```
/* md <= Large (lg) */
@media (max-width: 992px) {

}
```

### mobile-first:
```
/* Large (lg) */
@media (min-width: 992px) {

}
```

### hide any element:
```
add hidden attribute
```
