import React from 'react';

// import ProjectHeader from '../../components/03_projects/ProjectHeader';

class Retriever extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="project">
        {/* <ProjectHeader title="Retriever App" /> */}
        <div className="iframe-container">
          <iframe
            src="https://noahsjung.com/works/retriever-app"
            title="weddell"
            frameBorder="0"
            width={this.state.width}
            height={this.state.height}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Retriever;
