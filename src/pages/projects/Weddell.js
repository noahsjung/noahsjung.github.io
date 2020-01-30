import React from 'react';
// import { Spinner } from 'react-spinkit';

import ProjectHeader from '../../components/03_projects/ProjectHeader';

class Weddell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, loading: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  //loaidng animation while waiting fot the iframe to load
  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  //resize iframe height and width according to the user's window size
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    var Spinner = require('react-spinkit');
    console.log(this.state.loading);
    return (
      <div className="weddell-project">
        <ProjectHeader title="Weddell" />
        <div className="iframe-container">
          {this.state.loading ? (
            <Spinner
              className="loading"
              name="circle"
              color="#0171e3"
              fadeIn="none"
            />
          ) : null}
          <iframe
            src="https://noahsjung.com/works/weddell"
            title="weddell"
            frameBorder="0"
            onLoad={this.hideSpinner}
            width={this.state.width}
            height={this.state.height}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Weddell;
