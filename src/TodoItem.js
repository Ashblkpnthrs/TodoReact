import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.popUp = this.popUp.bind(this);
  
    }
  
    componentDidMount() {
      console.log(this.props.name)
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log("update " + this.props.name);
      return true;
    }
  
    /*popUp(e) {
      alert("Click on " + this.props.name)
      console.log(e.nativeEvent.type)
    }*/
  
    render() {
      /*if (this.props.name === 'Angular') {
        return null
      }*/
      return (
        <h3 onClick={this.popUp}>{this.props.name}</h3>
      )
    }
};

export default TodoItem;