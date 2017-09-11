# vanillaFlash
A lightweight vanilla JavaScript approach to flash messages.

## What is vanillaFlash ?
`vanillaFlash` is a library that allows to ease the use of flash messages.
It is also a vanilla JavaScript adaptation of my jQuery plugin [jq-flash (on NPM)](https://www.npmjs.com/package/jq-flash).

It allows you to flash messages in a very customizable manner.

## What is the required structure ?
First you need to include the CSS and JS files to your page.
Then you can either use a static or dynamic flash message :

### A dynamic approach
Sometimes you need to flash a message "on the go", therefore you can use :
```javascript
/*
flash(
	the string containing the message,
	the string containing the type of flash message [optional]
)
*/
flash("This is a message", "success");
```

### A static approach
Sometimes you need to flash a message via your back-end, therefore this is the default structure you need to use (at the very top of your `<body>` tag):
```html
<flash-message class="folded error">
	<button>&#x2716;</button><!-- a nice X-->
	<p>This is your error message</p>
</flash-message>
```

## How to customize vanillaFlash ?
`vanillaFlash` uses a class system to design types (`flash("", "type")` will use `type` as a CSS class for the `<flash-message>`).

Therefore you can create a class `x` like this:
```css
flash-message.x{
	background-color: /*the color used for the background of the flash message*/;
	color: /*the color used for the texts (message and button)*/;

	box-shadow: /*the box-shadow used for the background*/;
	text-shadow: /*the shadow behind the texts (message and button)*/;
}
```

You can also add "components" inside of the `<flash-message>`, in that case you might need to do more modifications:
```css
flash-message.icon > div.icon{
	height: 100%;
	width: 8vh;
}

flash-message.icon > div.icon{
	height: /*whatever between 0 and 100%*/;
	width: /*whatever between 0 and 8vh*/;
}

flash-message.icon > p{
	width: calc(100vw - 8vh - 8vh);
	/*total - img's div - button*/
}
```
Associated with
```html
<flash-message class="folded icon">
	<button>&#x2716;</button>
	<div class="icon">
		<img src="path/to/icon/file.extension" alt="your icon"/>
	</div>
	<p>Dem Messages</p>
</flash-message>
```
