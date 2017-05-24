const React = require('react');
const Modal = require('react-modal');
const sampleText = require('./sampleText');
const ReactGA = require('react-ga');

module.exports = React.createClass({
  getInitialState () {
    return {active: 'summary'};
  },

  componentDidMount() {
      ReactGA.initialize('UA-99352749-1', { debug: true });
      ReactGA.event({
          category: 'experince',
          action: 'Experience component load.'
      });
  },

  setActive (category) {
    this.setState({active: category});
  },

  isActive (category) {
    return this.state.active === category ? 'active' : '';
  },

  activeContent () {
    if (this.state.active == 'resume') {
      return this.getModal();
    } else if (this.state.active == 'technologies') {
      return (
        <pre className="experience-content">
          <center className="icons">
            <img src="assets/icons/excel.png" />
            <img src="assets/icons/access.png" />
            <img src="assets/icons/spss.png" />
            <img src="assets/icons/powerpoint.png" />
            <img src="assets/icons/wordpress.png" />
            <img src="assets/icons/html5.png" />
            <img src="assets/icons/css3.png" /><br />
            <strong> Data Analysis | </strong>Microsoft Excel, Microsoft Access, SPSS<br /><br />
            <strong>Content Creation | </strong>Adobe Creative Suite, SEO, Blog Writing, WordPress, Press Releases<br /><br />
            <strong>Research | </strong>Survey Building and Analysis, Writing Reports<br /><br />
            <strong>Social Media | </strong>Strategy, Channel Management, Direct Customer Communication<br /><br />
            <strong>Learning | </strong>SQL, HTML5, CSS3, Javascript, Git, GitHub<br /><br />
            <br /><br />
          </center>


        </pre>
      );
    } else {
      return (
        <pre className="experience-content">
          { sampleText.summary }<br/><br />{ sampleText.summary_1 }<br /><br />{ sampleText.summary_2 }
        </pre>
      );
    }
  },

  getModal () {
    let modalStyle = ({
        overlay : {
          position          : 'fixed',
          backgroundColor   : 'rgba(255, 255, 255, 0.75)',
          zIndex            : 55,
          display           : 'flex',
          alignItems       : 'center',
          justifyContent   : 'center'
        },
        content : {
          left: 'auto',
          right: 'auto',
          padding: 0,
          overflowY: 'hidden',
          overflowX: 'hidden'
      }
    });

    const loader = (
      <div className="center-spinner">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    );

    return (
      <Modal
        isOpen={true}
        style={modalStyle}
        onRequestClose={ () => this.setState({active: 'summary'}) }
      >
        <div className="x-button"
          onClick={() => this.setState({active: 'summary'})}>
          <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
        </div>
        <div className="modal-content">
          <img className="resume" src="assets/images/resume.png"/>
        </div>
      </Modal>);
  },

  render () {
    return (
      <div className="experience">
        <div className="experience-circles">
          <div className={"circle " + this.isActive('summary')}
                onClick={() => this.setActive('summary')}>
            <div>
              ABOUT ME
            </div>
          </div>
          <div className={"circle " + this.isActive('resume')}
                onClick={() => this.setActive('resume')}>
            <div>
              RESUME
            </div>
          </div>
          <div className={"circle " + this.isActive('technologies')}
                onClick={() => this.setActive('technologies')}>
            <div>
              SKILLS
            </div>
          </div>
        </div>
        {this.activeContent()}
      </div>
    );
  }
});
