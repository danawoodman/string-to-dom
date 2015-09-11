<a name="module_stringToDom"></a>
## stringToDom ⇒ <code>HTMLElement</code>
Adds the given valid HTML string to the page and returns the
resultant DOM node.

**Returns**: <code>HTMLElement</code> - The DOM node that was inserted  
**Throws**:

- <code>TypeError</code> Will throw a TypeError if `html` is invalid/badly formatted
- <code>TypeError</code> Will throw a TypeError if `target` is provided but is not a valid HTMLElement

**Todo**

- [ ] Add `position` support


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| html | <code>String</code> |  | The HTML string to insert |
| [target] | <code>HTMLElement</code> | <code>document.body</code> | The optional target element to add HTML to |

