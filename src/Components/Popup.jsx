import React, { Component, PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import '../Styles/Popup.scss';

class DefaultCloseButton extends PureComponent {
    static propTypes = {
        onClose: PropTypes.func.isRequired
    }

    render () {
        return (
            <span className="ds-react-popup__close-button" onClick={this.props.onClose}></span>
        )
    }
}

/**
 * Popup window component.
 */
class Popup extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        className: PropTypes.string,
        CloseButton: PropTypes.func,
        withoutCloseButton: PropTypes.bool,
    }

    static defaultProps = {
        CloseButton: DefaultCloseButton
    }

    render () {
        const {
            close,
            CloseButton,
            children,
            withoutCloseButton
        } = this.props;
        
        const className = classnames([
            'ds-react-popup',
            this.props.className
        ]);

        return(
            <section className={className}>
                {!withoutCloseButton && <CloseButton onClose={close} />}
                {children}
            </section>
        );
    }
}

export default Popup;
