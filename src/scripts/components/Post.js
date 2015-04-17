import React from 'react';
import moment from 'moment';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likes: this.props.likes};
  }

  _isLiked() {
    return this.state.likes.indexOf("Stewart") > -1;
  }

  clickLike() {
    var likes = this.state.likes || [];
    if (!this._isLiked())
        likes.push('Stewart')
    else {
        var index = likes.indexOf("Stewart");
        likes.splice(index, 1);
    }
    this.setState({likes: likes});
  }

  render() {
    var date = moment(this.props.date).format('MMMM Do YYYY, h:mm:ss a');
    return (
    <div>
      <div><span>{this.props.giver}</span> gave <span>{this.props.reciever}</span> a <span>{this.props.star_type}</span> on <span>{date}</span></div>
      <div>“{this.props.children}”</div>
      <div onClick={this.clickLike.bind(this)}><span>Like {this._isLiked()?'yes':'no'}</span></div>
      <div>{this.state.likes.join(', ')}</div>
     </div>
    );
  }
}
