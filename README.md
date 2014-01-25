# jQuery Cast Plugin

This plugin is a utility method for jQuery to convert a string value passed to it to one of the following JavaScript scalar primitives:

* `"false"` -> `false` (Bool)
* `"true"` -> `true` (Bool)
* `"null"` -> `null`
* `""` -> `undefined`
* `"<number>"` -> `<number>` (Number)

It will not cast Array or Object literals. This would mainly be used for properly casting values you would pull from form fields or other HTML attributes like data-* attributes.

## Usage

jQuery.cast(string) -> Returns properly casted scalar value.