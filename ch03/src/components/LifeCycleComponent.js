import { Component } from "react";

/*
  
*/

class LifeCycleComponent extends Component {
  state = {
    count: 0,
    isShow: true,
  };

  componentDidMount() {
    console.log("componentDidMount...");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate...");
  }
  render() {
    //console.log("render...");
    return (
      <div className="LifeCycleComponent">
        <h4>StateComponent</h4>
        <p>
          count : {this.state.count}
          <br />
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            ㅈㅡㅇㄱㅏㅇㅏㄴㄴㅕㅇ
          </button>ㅇㅇㄴㄴㅕㅇㅏㄹㅏㅣㄴㅁㅓㄹㅣㅁㄴㅓㄹㅣㄴㅇㄹㅏㅣㄴㅇㅁㄹ;ㅏㅣㅁㄴㅇ
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            ㅅㅐㅇㅅㅓㅇ/ㅈㅔㄱㅓ
          </button>
        </p>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount...");
  }
}
export default LifeCycleComponent;
