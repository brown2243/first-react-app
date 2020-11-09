import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    };
  }
  render() {
    console.info("UpdateContent render start.");
    console.log(this.state);
    return (
      <article>
        <h2>Update</h2>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <form
                role="form"
                className="form-group"
                action="/create-process"
                method="post"
                onSubmit={function (e) {
                  e.preventDefault()
                  this.props.onSubmit(
                    e.target.id.value,
                    e.target.title.value,
                    e.target.desc.value
                  )
                }.bind(this)}
              >
                <input type='hidden' name='id' value={this.state.id} />
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={function(e){
                      this.setState({
                        title:e.target.value
                      })
                    }.bind(this)}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="desc"
                    className="form-control"
                    value={this.state.desc}
                    onChange={function(e){
                      this.setState({
                        desc:e.target.value
                      })
                    }.bind(this)}
                  />
                </div>

                <div className="form-group text-center">
                  <input
                    type="submit"
                    className="btn btn-danger"
                    value="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default UpdateContent;
