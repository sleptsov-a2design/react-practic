import React from 'react';




class ImgItem extends React.Component {
    constructor() {
        this.state = {
            count : 5,
            color : "red",
        }
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState({ 
            count: this.state.count + 1,
            color: this.state.color === 'red' ? 'green' : 'red'
        });
    }
    render() {
        return (
            <div className="contact-card" style={this.props.border}>
                <img align="center" src={this.props.contact.imgUrl}/>
                <h3><font color="#3AC1EF">▍{this.props.contact.name}</font></h3>
                <p style={{display: this.props.contact.phone ? 'block' : 'none'}}>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
                <p style={{backgroundColor : this.state.color}} onClick={this.handleClick}>Count:{this.state.count}</p>
            </div>
        )
    }
}



export default ImgItem;
