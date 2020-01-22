<div align="center">
    <a href="https://nusalab-studios.github.io/sapl/">
      <img src="http://ultraimg.com/images/2018/02/19/nsjq.png" width="175px"
        alt="Sapl - The Sass Boilerplate">
    </a>
</div>

# Sapl - The Sass Boilerplate
[![Build Status](https://travis-ci.org/nusalab-studios/sapl-grunt.svg?branch=master)](https://travis-ci.org/nusalab-studios/sapl-grunt)
[![dependencies Status](https://david-dm.org/nusalab-studios/sapl-grunt/status.svg)](https://david-dm.org/nusalab-studios/sapl-grunt)
[![GitHub license](https://img.shields.io/github/license/nusalab-studios/sapl-grunt.svg)](https://github.com/nusalab-studios/sapl-grunt/blob/master/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/nusalab-studios/sapl-grunt.svg)](https://github.com/nusalab-studios/sapl-grunt/issues)

Sapl - The Sass Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.

* Sass with Gulp : [Here](https://github.com/nusalab-studios/sapl-gulp)
* Sass with Grunt : [Here](https://github.com/nusalab-studios/sapl-grunt)
* Sass with Webpack : [Here](https://github.com/nusalab-studios/sapl-webpack)

## Table of contents

   - [Quick Start](#quick-start)
   - [Architecture Sass](#architecture-sass)
   - [Directory Architecture](#directory-architecture)
   - [What's is this](#whats-is-this)
   - [Features](#features)
   - [How to use Grid System](#how-to-use-grid-system)
   - [How to use Mixins](#how-to-use-mixins)
   - [How to contribute](#how-to-contribute)
      - [Reporting a bug](#reporting-a-bug)
      - [Submitting a Pull Request](#submitting-a-pull-request)
   - [Dependencies](#dependencies)
   - [Source Images](#source-images)
   - [License](#license)

## Quick Start
1. Make sure you have these installed
    * [node.js](http://nodejs.org/)
    * [yarn](https://yarnpkg.com/en/)
    * [grunt](https://gruntjs.com/)
    * [sass](http://sass-lang.com/)
    * [browserify](http://browserify.org/)

2. Clone repository `git clone https://github.com/nusalab-studios/sapl-grunt.git`
3. CD to the folder `cd sapl-grunt` 
4. Run `yarn install`
5. Run `yarn start`
6. Happy to use :)  

## Architecture Sass
Properly architecting your Sass project is a crucial starting point to having a maintainable, scalable, and well-organized project. Sass makes separating your project into logical “modules” simple with the `@import` directive, which acts differently than the native CSS `@import` directive in that it **includes** `.scss` **or** `.sass` **files before the final CSS output.**

You can [read the documentation on the](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) `@import` [directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) to get a good idea of how you can use it to include partial files.

There are many project architectures that you can employ in your project, and each might have their pros and cons. The important thing is that you **choose one and stick with it**. In this article, The **7-1 Pattern** by Hugo Giraudel will be used. To summarize, there are **seven** folders and **one** `main.scss` file for output:

- `base/` – contains global styles, such as resets, typography, colors, etc.
- `components/` – contains each self-contained component in its own .scss partial
- `layout/` – contains styling for larger layout components; e.g. nav, header, footer, etc.
- `pages/` – contains page-specific styling, if necessary
- `themes/` – contains styling for different themes
- `utils/` – contains global mixins, functions, helper selectors, etc.
- `vendors/` – contains 3rd-party styles, mixins, etc.
- `main.scss` – output file that brings together all of the above parts

Reference : [scotch.io](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

## Directory Architecture
Add your files to the appropriate `src` subdirectories. Grunt will process and compile them into `dist`

```
sapl/
├── dist/
│   ├── css/
│   │   ├── vendors/
│   │   └── main.min.css
│   │
│   ├── fonts/
│   ├── images/
│   ├── js/
│   │   ├── vendors/
│   │   └── main.bundle.js
│   │ 
│   ├── videos/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── css/
│   │   ├── fonts/
│   │   │   └── sprites/
│   │   │
│   │   ├── images/
│   │   ├── js/
│   │   │   ├── base/
│   │   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── vendors/
│   │   │   └── main.js
│   │   │
│   │   └── sass/
│   │       ├── base/
│   │       ├── components/
│   │       ├── layout/
│   │       ├── pages/
│   │       ├── themes/
│   │       ├── utils/
│   │       ├── vendors/
│   │       └── main.scss
│   │
│   └── views/
│       ├── index.html
│       └── index2.html
│ 
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .travis.yml
├── gruntfile.js
├── LICENSE.md
├── package.json
└── README.md
```

## What's is this
* **.babelrc** <br />
This is a babel configuration file that converts the latest version of javascript to the old version. read the documentation [here](https://babeljs.io/docs/usage/babelrc/)

* **.editorconfig** <br />
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. read the documentation [here](http://editorconfig.org/)

* **.eslintrc** <br />
This is a eslint configuration file that checks your js code. read the documentation [here](https://eslint.org/docs/user-guide/configuring)

* **.gitignore** <br />
Ignores minified and generated files, this is best for working in teams to avoid constant conflict, only the source files are needed. read the documentation [here](https://help.github.com/articles/ignoring-files/)

* **.travis.yml** <br />
This is used on travis-ci.org for continuous integration tests, which monitor the Sapl build. read the documentation [here](https://docs.travis-ci.com/user/customizing-the-build/)

## Features
1. Semantic HTML5
2. Included Flat Colors
3. Included Typographys
4. Included Grid System
5. Included Babel
6. Browser Prefixing
7. Minifying HTML    
8. Minifying CSS   
9. Minifying Images
10. Minifying Javascript
11. Linting for Javascript
12. SVG Sprites
13. Livereload 
14. Includes Framework
    * [Jquery](https://jquery.com/)
    * [Jquery UI](http://jqueryui.com/)
    * [Popper](https://popper.js.org/)
    * [Bootstrap](http://getbootstrap.com/)
    * [Font Awesome](https://fontawesome.com/)
15. Includes Useful Mixins
    * Breakpoints
    * Clearfix
    * Rem units
    * Background Image
    * Background Image Using Parallax Effect
    * Background Image Colored
    * Background Image Colored and Using Parallax Effect
    * Background Image Sliced 
    * Background Image Sliced and Using Parallax Effect
    * Background Image Colored and Sliced 
    * Background Image Colored, Sliced and Using Parallax Effect
    * Background Image Triangle
    * Background Image Colored and Triangle
    * Background Image Colored, Triangle and Using Parallax Effect

## How to use Grid System
You can choose between columns 1 - 12 that you want to use,
in my example, I use column 1.

1. Global
    ```
        <div class="sapl-col-1">
            // html code
        </div>
    ```
2. Extra Small ≥ 376px
    ```
        <div class="sapl-col-xs-1">
            // html code
        </div>
    ```
3. Small ≥ 576px
    ```
        <div class="sapl-col-sm-1">
            // html code
        </div>
    ```
4. Medium ≥ 768px
    ```
        <div class="sapl-col-md-1">
            // html code
        </div>
    ```
5. Large ≥ 992px
    ```
        <div class="sapl-col-lg-1">
            // html code
        </div>
    ```
6. Extra Large ≥ 1200px
    ```
        <div class="sapl-col-xl-1">
            // html code
        </div>
    ```

## How to use Mixins
1. Breakpoints
    ```
    @include mq (min, xs) {
        .example {
            // your css
        }
    }

    @include mq (max, xs) {
        .example {
            // your css
        }
    }

    or 

    .example {

        @include mq (min, xs) {
            .example-2 {
                // your css
            }
        }
    }

    .example {

        @include mq (max, xs) {
            .example-2 {
                // your css
            }
        }
    }
    ```
   
2. Clearfix
    ```
    .example {
        @include clearfix;
    }
    ```
3. Rem units
    ```
    .example {
        font-size: rem(16px);
    }
    ```
4. Background Image
    ```
    .example {
        @include bgImg ('../images/image.jpeg', center center, no-repeat, cover);
    }
    ```
5. Background Image Using Parallax Effect 
    ```
    .example {
        @include bgImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed);
    }
    ```
6. Background Image Colored
    ```
    .example {
        @include bgImgColored ('../images/image.jpeg', center center, no-repeat, cover, rgba(255, 0, 0, 0.45));
    }
    ```
7. Background Image Colored and Using Parallax Effect
    ```
    .example {
        @include bgImgColoredParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, rgba(255, 0, 0, 0.45));
    }
    ```
8. Background Image Sliced
    ```
    .example {
        @include bgImgSlicedTopLeft ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }
    
    .example {
        @include bgImgSlicedTopRight ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }

    .example {
        @include bgImgSlicedBottomLeft ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }
    
    .example {
        @include bgImgSlicedBottomRight ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }

    .example {
        @include bgImgSlicedTopBottomLeftRight ('../images/image.jpeg', center center, no-repeat, cover, 25%, 75%);
    }

    .example {
        @include bgImgSlicedTopBottomRightLeft ('../images/image.jpeg', center center, no-repeat, cover, 25%, 75%);
    }
    ```
9. Background Image Sliced and Using Parallax Effect 
    ```
    .example {
        @include bgImgSlicedParallaxTopLeft ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }
    .example {
        @include bgImgSlicedParallaxTopRight ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }

    .example {
        @include bgImgSlicedParallaxBottomLeft ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }

    .example {
        @include bgImgSlicedParallaxBottomRight ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }

    .example {
        @include bgImgSlicedParallaxTopBottomLeftRight ('../images/image.jpeg', center center, no-repeat, cover, fixed, 25%, 75%);
    }

    .example {
        @include bgImgSlicedParallaxTopBottomRightLeft ('../images/image.jpeg', center center, no-repeat, cover, fixed, 25%, 75%);
    }
    ```
10. Background Image Colored and Sliced 
    ```
    .example {
        @include bgImgColoredSlicedTopLeft ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedTopRight ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedBottomLeft ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedBottomRight ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedTopBottomLeftRight ('../images/image.jpeg', center center, no-repeat, cover, 25%, 75%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedTopBottomRightLeft ('../images/image.jpeg', center center, no-repeat, cover, 25%, 75%, rgba(255, 0, 0, 0.45));
    }
    ```
11. Background Image Colored, Sliced and Using Parallax Effect
    ```
    .example {
        @include bgImgColoredSlicedParallaxTopLeft ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedParallaxTopRight ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedParallaxBottomLeft ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedParallaxBottomRight ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedParallaxTopBottomLeftRight ('../images/image.jpeg', center center, no-repeat, cover, fixed, 25%, 75%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredSlicedParallaxTopBottomRightLeft ('../images/image.jpeg', center center, no-repeat, cover, fixed, 25%, 75%, rgba(255, 0, 0, 0.45));
    }
    ```
12. Background Image Triangle
    ```
    .example {
        @include bgImgTriangleTop('../images/image.jpg', center center, no-repeat, cover, 25%);
    }

    .example {
        @include bgImgTriangleBottom('../images/image.jpg', center center, no-repeat, cover, 75%);
    }

    .example {
        @include bgImgTriangleTopBottom('../images/image.jpg', center center, no-repeat, cover, 25%, 75%);
    }
    ```
13. Background Image Colored and Triangle
    ```
    .example {
        @include bgImgColoredTriangleTop('../images/image.jpg', center center, no-repeat, cover, 25%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredTriangleBottom('../images/image.jpg', center center, no-repeat, cover, 75%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredTriangleTopBottom('../images/image.jpg', center center, no-repeat, cover, 25%, 75%, rgba(255, 0, 0, 0.45));
    }
    ```
14. Background Image Colored, Triangle and Using Parallax Effect
    ```
    .example {
        @include bgImgColoredTriangleParallaxTop('../images/image.jpg', center center, no-repeat, cover, fixed, 25%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredTriangleParallaxBottom('../images/image.jpg', center center, no-repeat, cover, fixed, 75%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgImgColoredTriangleParallaxTopBottom('../images/image.jpg', center center, no-repeat, cover, fixed, 25%, 75%, rgba(255, 0, 0, 0.45));
    }
    ```

## How to contribute
I'm delighted that you're helping make this open source project better. Here are a few quick guidelines to make this an easier and better process for everyone.

### Reporting a bug
First, **make sure the bug hasn't already been reported** by searching GitHub's issues section.

If no existing issue exists, go ahead and create one. **Please be sure to include all of the following**:

1. A clear, descriptive title (ie. "A bug" is not a good title).
2. Include the error message if have.
3. The browser and OS that you're using.

### Submitting a Pull Request
1. Fork it
2. Create your feature branch `git checkout -b new-feature`
3. Commit your changes `git commit -m "Add some feature"`
4. Push to the branch `git push -u origin new-feature`
5. Create new Pull Request

## Dependencies
1. [grunt](https://github.com/gruntjs/grunt)
2. [babel](https://github.com/babel/babel)
3. [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
4. [babel-preset-stage-2](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2)
5. [babelify](https://github.com/babel/babelify)
6. [eslint](https://github.com/eslint/eslint)
7. [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
8. [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
9. [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
10. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
11. [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
12. [grunt-browser-sync](https://github.com/BrowserSync/browser-sync)
13. [grunt-browserify](https://github.com/jmreidy/grunt-browserify)
14. [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent)
15. [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
16. [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
17. [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
18. [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
19. [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
20. [grunt-cssnano](https://github.com/sindresorhus/grunt-cssnano)
21. [grunt-eslint](https://github.com/sindresorhus/grunt-eslint)
22. [grunt-image](https://github.com/1000ch/grunt-image)
23. [grunt-sass](https://github.com/sindresorhus/grunt-sass)
24. [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin)
25. [grunt-svgstore](https://github.com/FWeinb/grunt-svgstore)

## Source Images
* [Google](https://www.google.com)
* [Pexels](https://www.pexels.com)
* [Stocksnap](https://stocksnap.io)

## License
[MIT](https://github.com/nusalab-studios/sapl/blob/master/LICENSE.md) &copy; [Nusalab Studios](https://github.com/nusalab-studios)
