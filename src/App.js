import React from 'react';
import Home from "./views/Home";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class App extends React.Component {
  render() {
    return <Home events={this.props.events}/>
  }
}



const mapStateToProps = ({global}) => ({
  serverError: global.serverError,
  events: global.events,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);
