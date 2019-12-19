import React from 'react';
import './App.css';
import ImgItem from './ImgItem';
import cardInfo from './cardInfo';



class App extends React.Component  {

  setStyles(lenght) {
    let a = {};
    if (lenght < 10) {
      a.border = '5px solid red';
    } else {
      a.border = '5px solid green';
    }
    return a;
  }

  render() {
    const cardComponent = cardInfo.map(item => {
      return (
        <ImgItem
          key = {item.id}
          contact = {item}
          border={this.setStyles(item.name.length)}
      />
      )
    })
    
    return (
      <div className="contacts">
        {cardComponent}
      </div>
    )
  }
}



export default App;
