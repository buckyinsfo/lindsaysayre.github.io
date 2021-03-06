import React from 'react';
import ReactGA from  'react-ga';

class Contact extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-99352749-1', { debug: true });
        ReactGA.event({
            category: 'contact',
            action: 'Contact component load.'
        });
    }

    render () {
        return (
            <div className="contact-container">
                <div className="contact-box">
                    <div className="profile-description">
                        <h2>CONTACT ME</h2>
                        <h3>lindsay@thesayres.net</h3>
                        <p>
                            Want to discuss a marketing gig for your organization or community project?
                            <br /><br />
                            Don't hesitate to reach out.
                        </p>
                    </div>
                    <div className="up-arrow" onClick={this.props.upArrowClick}>
                        <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;