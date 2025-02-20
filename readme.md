# Simple Starter
A simple starter for web development using native technologies.

![Simple-Starter](https://raw.githubusercontent.com/agragregra/Simple-Starter/main/public/images/preview.png)
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
.container
.row
.row-cols-{2, 3, 4}
.row-cols-{breakpoint}-{2, 3, 4}
.col-{1-12}
.col-{breakpoint}-{1-12}
.order-{first, 0–5, last}
.d-{breakpoint}-{block, inline-block, flex, inline-flex, grid, inline-grid, inline, none}
.flex-{fill, row, row-reverse, column, column-reverse, wrap, nowrap}
.justify-content-{start, end, center, between, around, evenly}
.align-items-{start, end, center, baseline, stretch}
.align-content-{start, end, center, between, around, stretch}
```

### css mode classes (root):
```
.light
.dark
```

### theme switcher:
```
<span data-mode="light">Light</span>
<span data-mode="dark">Dark</span>
<span data-mode="auto">Auto</span>
```

### switcher active item:
```
[data-mode].active {}
```
