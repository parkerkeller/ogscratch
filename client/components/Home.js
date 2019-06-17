import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';
import Artwork from './Artwork'

let displayArt;
let goChat = false;

const mapStateToProps = store => ({
  error: store.userTraffic.error,
  art: store.userTraffic.art,
  goToChat: store.userTraffic.goToChat,
});

const mapDispatchToProps = dispatch => ({
  getArt: () => {
    dispatch(actions.getArt())
  },
  chat: () => {
    dispatch(actions.chat())
  }
});


class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
<<<<<<< HEAD
    // fetch('http://localhost:3000/api/getallart')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(res => {
    //     console.log('this is res in component did mount ', res)
    //     return displayArt = res.map(el => {
    //       return (
    // <div className="artUnit">
    //   <img src={el.image} style={{ height: 800 }}></img>
    //   <p className="unitTitle"><strong>{el.title}</strong></p>
    //   <p>Description: {el.description}</p>
    //   <p>Material: {el.material}</p>
    //   <p>Price: {el.price}</p>
    // </div>
    //       )
    //     })
    //   })
    this.props.getArt();
  }

  render() {
    const formattedArt = [];
    console.log(this.props.art);
    for (let i = 0; i < this.props.art.length; i++) {
      formattedArt.push(
        <div className="artUnit">
          <img src={this.props.art[i].image} style={{ height: 800 }}></img>
          <p className="unitTitle"><strong>{this.props.art[i].title}</strong></p>
          <p>Description: {this.props.art[i].description}</p>
          <p>Material: {this.props.art[i].material}</p>
          <p>Price: {this.props.art[i].price}</p>
        </div>
      );
    }
    // console.log('ART IN HOME', this.props.art);

=======
    // console.log('in didmount')
    this.props.getArt();
}
  
  render() {
    if (this.props.goToChat === true && goChat === false) {
      goChat = true;
      return <Redirect to="/chat"></Redirect>
    }

    const artwork = this.props.art.map(el =>
      <Artwork art={el} ></Artwork>
    )
>>>>>>> e4e6644... store is being updated by input box

    return (
      <div>
        <button className="chat" onClick={(e) => { e.preventDefault(); this.props.chat()}}>Go to Chat</button>
        <h2>Current Art Available</h2>
<<<<<<< HEAD
        {/* {console.log('this is display art', displayArt)} */}
        {/* {displayArt} */}
        {formattedArt}
=======
        {artwork}
>>>>>>> e4e6644... store is being updated by input box
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);