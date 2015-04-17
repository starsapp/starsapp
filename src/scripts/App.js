import React from 'react';
import Post from './components/Post';

export default class App extends React.Component {
  render() {
    return (
    <div>
      <Post giver="Sophie" likes={["Peter", "Joey", "Stewart"]} reciever="Peter" star_type="Tech star" date="2014-06-01 12:00">
		Daniel is the bomb dot com because he fixed all of the billing problems in only 30 minutes. Customers barely knew we triple charged their accounts! What a close call!
      </Post>
    </div>
    );
  }
}
