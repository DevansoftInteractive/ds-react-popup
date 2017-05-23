import React, {Component} from 'react';
import {render} from 'react-dom';
import Popup from '../../src/Components/Popup';


class Example extends Component{
    
    constructor(){
        super();
        this.state = {
            showPopup : false
        };
        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }

    render(){
        return <section>
            {this.state.showPopup && 
                <Popup close={this.hidePopup}>
                    <p>This is a paragraph which is a child to the popup container. You can place here a Yes/No buttons, forms, picture preview or really anything.</p>
                </Popup>
            }
            <input type="button" value="Open popup" onClick={this.showPopup} />
            <p style={{width : "40%", textAlign : "justify"}}>
                Lorem ipsum dolor sit amet ante. Duis eu odio consequat mollis eu, tortor. Vivamus ornare, orci ultricies accumsan. Cras dolor quam, lobortis vitae, vestibulum nec, pharetra vel, ornare euismod. Donec elementum et, felis. Curabitur quis massa sit amet leo. Aenean ipsum primis in faucibus orci luctus nec, suscipit sed, dapibus mauris sed nulla. Duis commodo turpis risus elit laoreet venenatis tristique, urna quis massa a dolor ac ligula in nonummy eget, aliquam purus. Maecenas nec enim metus eros sagittis ultricies. Nullam aliquet ipsum non arcu. Praesent ante. Pellentesque mollis consectetuer. Aenean urna elit, dictum volutpat. Pellentesque placerat. Mauris suscipit dui tellus, eleifend quam et enim. Nam eget est. Vivamus arcu erat, molestie placerat, molestie enim. Mauris viverra eget, blandit eu, wisi. Morbi egestas, dui ornare arcu a diam. Morbi ligula accumsan at, egestas blandit, dui imperdiet ante ipsum primis in consequat ligula enim vel ligula accumsan sed, congue risus arcu ac risus. Suspendisse dignissim turpis. Sed ut tellus nec erat ac posuere vitae, vestibulum sapien, non mi. Cras vitae lectus sit amet quam. Praesent ac nunc. Suspendisse turpis tellus, fringilla.
                Sed ultricies viverra elit. Pellentesque habitant morbi tristique eu, leo. Vivamus lacus. Integer mi at libero. Aenean feugiat dui, non nunc. Sed eget leo ut tellus sollicitudin fermentum, dui sodales pretium eget, bibendum arcu faucibus lorem, pretium cursus. In nonummy. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Phasellus quis arcu. Suspendisse potenti. Vestibulum quis wisi. Phasellus consequat. Quisque vehicula neque tellus, quis molestie venenatis convallis ac, rhoncus ut, pellentesque eget, lacinia quam nulla, faucibus justo. Fusce gravida, nisl mollis nulla ut vehicula elit rhoncus a, convallis eu, tempus enim est eu mauris. Pellentesque ut urna. Cras rhoncus eget, tortor. Ut lobortis vitae, fringilla augue eu mollis faucibus, diam turpis augue, feugiat sit amet, consectetuer adipiscing sed, lectus. Nam molestie. Nulla augue purus, dictum at, posuere ante ipsum dolor nunc, at lacus a elit. Aenean pede bibendum varius commodo et, felis. Mauris ut quam placerat porttitor. Phasellus sapien dui eget leo. Integer aliquam erat. Quisque pharetra, urna ut wisi. Vivamus posuere consectetuer. Etiam tellus. Vestibulum scelerisque urna elit, varius vitae, pede. Nulla quis orci. Proin aliquam arcu. Cum.
            </p>
        </section>
    }

    showPopup(){
        this.setState({showPopup : true});
    }

    hidePopup(){
        this.setState({showPopup : false});
    }
}

render(
    <Example />,
    document.querySelector("#example")
);