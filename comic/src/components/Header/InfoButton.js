import React, { Component} from 'react';

import Modal from './Modal';

import './InfoButton.css';

class InfoButton extends Component {
    constructor(props) {
        super(props)
        this.state = { modalOpen: false }
    };
    

openModal=() =>{
 this.setState({ modalOpen: true })
}
    

closeModal=()=> {
    this.setState({ modalOpen: false })
}

render() {
    console.log(this.state)
return (
    <div>
    <button onClick={this.openModal} ><i class="fas fa-bars"></i>
    </button>
    <Modal isOpen={this.state.modalOpen} onClose={this.closeModal}>
    <h2> About </h2>
    <p> info </p>
    <p> <button onClick ={this.closeModal}> X </button></p>
    </Modal>
    </div>
)
}
}
export default InfoButton;