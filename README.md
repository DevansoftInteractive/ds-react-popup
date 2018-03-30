# ds-react-popup
Popup container component for ReactJS.
![Working popup](http://oi66.tinypic.com/10wmqmx.jpg)

## Installation
To install, type in command prompt/terminal:

    npm install --save ds-react-popup
## Usage
```javascript
...
import Popup from 'ds-react-popup'

...
    //In your component's render method
    render(){
        ...
        //Close prop takes a function, that will close the popup after the red X is clicked on.
        <Popup close={closePopup}>
            //Here place any children you want. Popup will adjust size to it's content.
        </Popup>
    }
```

If you wish to style popup, you can override two BEM classes:

`ds-react-popup` - default class for whole popup

`ds-react-popup__close-button` - class for close button

You can also provide your own class via `className` prop.

## Props
`close` - Function, that will close popup after click on close button

`CloseButton` - React.Component that will replace the default red 'x' button

`withoutCloseButton` - Boolean flag, if false close button won't be rendered. Mind, that you have to provide other way to close popup.
## Example
Clone the repository, install dependencies with `npm i`. Then, just run `webpack-dev-server` and go to `http://localhost:8080/examples/basic/`
## Demos
Soon.