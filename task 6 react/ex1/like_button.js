'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

// class Counter extends React.Component {
//   state = {
//     count: 0
//   };
//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: count + 1
//     }));
//   };
//   render() {
//     return <button onClick={this.handleClick}>{this.state.count}</button>;
//   }
// }
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render((Counter), domContainer);
