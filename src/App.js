import React, {Component} from 'react'
import './App.css';
import Subject from './component/Subject'
import Toc from './component/Toc'
import ReadContent from './component/ReadContent'
import Control from './component/Control'
import CreateContent from './component/CreateContent'
import UpdateContent from './component/UpdateContent'


class App extends Component{
  constructor(props){
    super(props);
    this.max_toc_id = 3;
    this.state = {
      mode: 'welcome', // mode - read, create, update, delete...
      selected_toc_id: 2,
      welcome: { title: 'Welcome to React page!', desc: 'This is React page' },
      subject: { title: 'WEB 2.0', desc: 'World Wide Web!' },
      toc: [
        { id: 1, title: 'HTML5', desc: 'HTML5 is Hyper Text Markup Language' },
        { id: 2, title: 'CSS3', desc: 'CSS3 is Cascading Style Sheet' },
        {
          id: 3,
          title: 'Javascript ES6',
          desc: 'Javascript is for interactive',
        },
      ],
    };
  }

  getReadToc() {
    var i = 0;
    while (i < this.state.toc.length) {
      var data = this.state.toc[i];
      if (data.id === this.state.selected_toc_id) {
        return data;
      }
      i += 1;
    }
  }

  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      var data = this.getReadToc();
      _article = <ReadContent title={data.title} desc={data.desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_toc_id += 1;
            var _newToc = this.state.toc.concat({
              id: this.max_toc_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              toc: _newToc
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      var data = this.getReadToc();
      _article = (
        <UpdateContent
          data={data}
          onSubmit={function (_id, _title, _desc) {
            var _tocs=Array.from(this.state.toc)
            var _id = Number(_id)
            var i = 0
            while(i < _tocs.length){
              if(_tocs[i].id === _id){
                _tocs[i] = {id:_id,title:_title,desc:_desc}
                break
              }
              i = i + 1
            }
            this.setState({toc:_tocs, mode:'read'})
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
    console.info('App render start.');
    // mode 구분처리
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          onChangePage={function () {
            this.setState({
              mode: 'welcome',
            });
          }.bind(this)}
        ></Subject>
        <Control
          onChangeMode={function (_mode) {
            if(_mode ==='delete'){
              if(window.confirm('Really?')){
                var _toc = Array.from(this.state.toc)
                var i = 0
                while(i < _toc.length){
                  if(_toc[i].id === this.state.selected_toc_id){
                    _toc.splice(i, 1)
                    break
                  }
                  i += 1
                }
                this.setState({
                   mode:'welcome',
                   toc:_toc
                  });
              }
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        ></Control>
        <Toc
          data={this.state.toc}
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_toc_id: Number(id),
            });
          }.bind(this)}
        ></Toc>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
