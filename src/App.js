import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import logo from './logo.svg';
import Loginscreen from './Loginscreen';
import UploadScreen from './UploadScreen'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })

                    // if(response.data.code == 200){
                    //   console.log("Login successfull");
                    //   var uploadScreen=[];
                    //   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                    //   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                    //   }
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
		 <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;