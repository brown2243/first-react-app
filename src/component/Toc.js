import React, {Component} from 'react';

class Toc extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log("this.props.data->",this.props.data)
    console.log("newProps.data->",newProps.data)
    if (this.props.data === newProps.data)
      return false;
    else
      return true
  }
  render(){
    console.info('Toc render start.')
    var lists = []
    var data = this.props.data
    console.log(data)
    var i = 0
    while(i < data.length){
      lists.push(
        <li key={data[i].id} className='list-group-item'>
          <a href="#" data-id={data[i].id} onClick={function(e){
            e.preventDefault()
            this.props.onChangePage(e.target.dataset.id)
        }.bind(this)}>{data[i].title}</a>
        </li>
      )
      i += 1
    }
    return(
    <nav className='navbar'>
        <ul className='list-group'>{lists}</ul>
    </nav>
    )
  }
}

export default Toc;