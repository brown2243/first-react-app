import React, {Component} from 'react';

class Subject extends Component {
  shouldComponentUpdate(newProps,newState){
    if(newProps.title === this.props.title && newProps.desc === this.props.desc)
      return false
    else
      return true
  }
    render() {
      console.info('Subject render start.')
      return (
        <header>
          <h1><a href="#" onClick={function(e){
            e.preventDefault()
            this.props.onChangePage()
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.desc}
        </header>
      );
    }
  }

export default Subject;