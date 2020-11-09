import React, {Component} from 'react'

class Control extends Component{
    render(){
        return (
           <div className='container'>
               <div className='row'>
                   <div className='col-12'>
                        <a className='btn btn-warning' 
                           href="/create" 
                           onClick={function(e){
                                e.preventDefault()
                                this.props.onChangeMode('create')
                            }.bind(this)}>create</a>
                            
                        <a className='btn btn-success' 
                            href="/update"
                            onClick={function(e){
                                e.preventDefault()
                                this.props.onChangeMode('update')
                            }.bind(this)}>update</a>
                            
                        <input className='btn btn-primary'
                               type="button" 
                               value="delete"
                               onClick={function(e){
                                    e.preventDefault()
                                    this.props.onChangeMode('delete')
                                }.bind(this)}></input>
                    </div>
                </div>
           </div>
        )
    }
}
export default Control