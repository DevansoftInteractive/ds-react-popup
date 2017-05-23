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
## Example
Just webpack the package and run example index.html from examples/basic.
## Demos
Soon.