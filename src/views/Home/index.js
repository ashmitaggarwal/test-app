import React, {Component} from "react";
import Layout from "../../component/Layout";

class Home extends Component {

    render() {
        return <div>
            <Layout events={this.props.events}/>
        </div>

    }
}


export default Home;
