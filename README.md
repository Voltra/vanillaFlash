# vanillaFlash
A lightweight vanilla JavaScript approach to flash messages.

## What is vanillaFlash ?
`vanillaFlash` is a library that allows to ease the use of flash messages.
It is also a vanilla JavaScript adaptation of my jQuery plugin [jq-flash](https://www.npmjs.com/package/jq-flash).

It allows you to flash messages in a very customizable manner.

## What is the required structure ?
First you need to include the CSS and JS (included in `dist`) files to your page.

This library works bests with a complete CSS reset, one stylesheet is provided for this purpose.

`require`/`import` shouldprovide the flash function, including it as a script tag will expose the `flash` global variable.

Then you can either use a static or dynamic flash message :



### A dynamic approach
Sometimes you need to flash a message "on the go", therefore you can use :
```javascript
flash("success", "This is a message");
flash("pingas", "OwO");

flash.success("yeah!");
flash.failure("oh :c");
flash.info("btw");
```



### A static approach

Sometimes you need to flash a message via your back-end, therefore this is the default structure you need to use (at the very top of your `<body>` tag):
```html
<div class="flash flash-folded">
	<button class="flash-close">&#x2716;</button><!-- a nice X-->
	<p>This is a message</p>
</div>
```

The flash message type is indicated by adding a class to the wrapping`div` :

```html
<div class="flash flash-folded flash-success">
	<button class="flash-close">&#x2716;</button><!-- a nice X-->
	<p>This is a message</p>
</div>
```


## How to embed ?
Since v2.0.0 you can use the special class `flash-embed` to specify that the flash message isn't in the global scope (i.e. it is within another element than `<body>`).

Since v2.0.1 you can now flash has the following signature : `flash(type, message, context)`. You can provide the `context` argument (which expects an `HTMLElement`) to specify where to embed it. This works also with shorthands (e.g. `flash.info("PINGAS", document.getElementById("flash_holder"))`).



The following is the basic HTML structure for an embed :

```html
<div class="someContainer">
    <div class="flash flash-folded flash-embed">
        <button class="flash-close">&#x2716;</button>
        <p>Dem Messages</p>
    </div>
    
    <div class="someOtherContent">
        [...]
    </div>
</div>
```






## How to customize vanillaFlash ?

`vanillaFlash` uses a class system to design types (`flash("type", "")` will use `flash-type` as a CSS class for the `div`).

Since v2.0.0, `vanillaFlash` uses [Sass](https://sass-lang.com/), more specifically the SCSS syntax. You can find the source stylesheets under `src`.



You can create a new type by doing the following:

```scss
@import "~vanilla_flash/src/flash";//webpack
.flash-myType{
    @include flashTheme(
        orange, //bg color
        white, //text color
        0 0 2px rgba(#000, 0.1), //box shadow,
        none //text shadow
    );
}
```



You can also modify variables before importing sthe entire `flash` stylesheet because it uses `!default` flags everywhere :

```scss
$flashGreen: blue;
@import "~vanilla_flash/src/flash";//webpack
```







You can also add "components" inside of the `div`, in that case you might need to do more modifications:
```css
.flash-icon{
	height: 100%;
	width: 8vh;
}

.flash-icon > div.icon{
	height: /*whatever between 0 and 100%*/;
	width: /*whatever between 0 and 8vh*/;
}

.flash-icon > p{
	width: calc(100vw - 8vh - 8vh);
	/*total - img's div - button*/
}
```
Associated with
```html
<div class="flash flash-folded flash-icon">
	<button class="flash-close">&#x2716;</button>
	<div class="icon">
		<img src="path/to/icon/file.extension" alt="your icon"/>
	</div>
	<p>Dem Messages</p>
</div>
```
