import React, {Component} from 'react';

class CreateContent extends Component{
  render(){
    console.info('CreateContent render start.')
    return(
      <article>
        <h2>Create</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <form role='form' 
                    className='form-group' 
                    action='/create-process' 
                    method='post'
                    onSubmit={function(e){
                      e.preventDefault()
                     this.props.onSubmit(e.target.title.value, e.target.desc.value)
                    }.bind(this)}>

                <div className='form-group'>
                  <input type='text' name='title' className='form-control' placeholder='input title' />
                </div>

                <div className='form-group'>
                  <textarea name='desc' className='form-control' placeholder='input DS' />
                </div>

                <div className='form-group text-center'>
                  <input type='submit' className='btn btn-danger' value='Save'/>
                </div>

              </form>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default CreateContent;