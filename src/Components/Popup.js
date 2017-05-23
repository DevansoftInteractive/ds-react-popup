import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from '../Styles/Popup.scss';

/**
 * Popup window component.
 */
class Popup extends Component{

    render(){

        return(
            <section className="ds-react-popup">
                <span className="ds-react-close-popup" onClick={this.props.close}></span>
                {this.props.children}
            </section>
        );

    }

}

Popup.propTypes = {
    close : PropTypes.func
};

export default Popup;