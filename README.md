# SMW Central - Site Schemes

This repo hosts all of the site schemes available on [SMW Central](https://www.smwcentral.net/), as well as the files
necessary to create a custom site scheme.

Anyone can create a new scheme - no need to ask! After you're done, send us a pull request or get in touch with a
[Developer](https://www.smwcentral.net/?p=profile&id=34168) directly.

## Layout

The most important directories in this repo are:

-   [`schemes`](./schemes): stores the site schemes
-   [`templates`](./templates): templates for creating a new scheme, see "Creating a new scheme" below for details
-   [`common`](./common): split from the site's code, contains the bare minimum Sass code required to build a scheme
-   [`assets`](./assets): split from the site's code, contains images for schemes

## Creating a new scheme

### Overview

Schemes in SMW Central are based on a set of predefined [CSS custom
properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), which
are used to customize different aspects of the site's appearance. Schemes may also include a minimal amount of custom
CSS to make further tweaks.

A scheme should ideally support both a "light mode" and a "dark mode" that the user (or their browser) can switch
between, which we call a dual-mode scheme. Alternatively, a scheme can be light-mode-only or dark-mode-only.

When editing a scheme, you should only edit its own `.scss` file, without touching any of the [`common`](./common) code.

### Adding a new scheme

To get started with a new scheme, choose the appropriate template from the [`templates`](./templates) directory
depending on the color modes you want to support - [`dual.scss`](./templates/dual.scss),
[`light.scss`](./templates/light.scss), or [`dark.scss`](./templates/dark.scss). Copy the template into
[`schemes`](./schemes), renamed to match your scheme. Edit the comment at the top of the file to include your scheme's
full name and your username.

### Customizing properties

As mentioned earlier, the most important part of a scheme is the definitions for all of the CSS custom properties, which
are defined in the `:root` block. Make sure not to omit any of the existing definitions from the template. Also, make
sure not to remove any of the existing `@import` blocks.

Schemes that support only one color mode can define all of their colors in the `:root` block. Dual-mode schemes that
support both light mode and dark mode should default to light mode in their `:root` block and use a `@include
mixins.dark-mode-only` block for their dark mode styles.

Aside from the properties included in the template, several more properties are defined in
[`common/_root.scss`](./common/_root.scss).

<!-- These images show example uses of all CSS custom properties. Note that these are only examples, as the properties are
widely reused across different components. -->

### Custom CSS

You can append any CSS you want at the end of the scheme. You may use any Sass features if you wish, including the
mixins from the `common` files; check the existing schemes for examples.

**Please keep your custom CSS to a minimum**. More custom CSS makes it harder for us to support your scheme moving
forward, and so we reserve the right to reject a scheme with too much custom CSS, for an arbitrary definition of "too
much".

### Building

SMW Central uses [Sass](https://sass-lang.com) to preprocess its CSS. If you want to build a scheme so you can preview
it, you need to convert the SCSS files to CSS usable in a browser.

Assuming you have [Node](https://nodejs.org/en/) installed on your computer, start by running `npm install` to download
Sass.

Then, run `npm run build -- <file>` to build a given scheme. For example, to build the default scheme, run `npm run
build -- schemes/default.scss`.

### Previewing

You can use your browser's developer tools or an extension such as Stylus to insert the file into an SMW Central page.

Due to the way color modes are implemented, we highly recommend forcing a particular color mode, especially for schemes
that support only one color mode. For example, injecting CSS for a light-mode-only scheme when dark mode is enabled
might cause problems.

Also, it's best to use a scheme with no custom CSS when injecting your own scheme, once again to avoid conflicts. The
"Default" scheme is a good candidate for this.

For convenience, you can use query parameters to temporarily override your scheme preferences on SMW Central:

-   Main Page, "Default" scheme, dark mode: https://www.smwcentral.net/?p=main&smwc2_scheme=default&smwc2_color=light
-   Main Page, "Default" scheme, light mode: https://www.smwcentral.net/?p=main&smwc2_scheme=default&smwc2_color=dark

## Support

Feel free to ask [Telinc1](https://smwc.me/u/15661) if you have any questions regarding the schemes.

Note that the "legacy schemes" from the old site design are not included in this repository due to their complexity. The
code for individual schemes will be provided on-demand if you want to port or re-create one.

## License

Released under the [MIT License](https://github.com/SMWCentral/Schemes/blob/main/LICENSE.md).

## Credits

Built and maintained by [Telinc1](https://github.com/telinc1). SMW Central is property of
[Noivern](https://smwc.me/u/6651).

## Version

The included SCSS files are split from commit `e808c39` of the SMW Central source code.
