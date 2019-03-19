import React, { Component} from 'react';

class Modal extends Component {
close(e) {
    e.preventDefault()
    if (this.props.onClose) {
        this.props.onClose()
    }
}

render(){
    if (this.props.isOpen === false )
    return null
let modal= {
    position:'absolute',
    top:'500%',
    left: '50%',
    width:'100%',
    height:'500%',
    transform: 'translate(-50%,-100%)',
    zIndex: '9998',
    background:'rgba(0,0,0,0.8)'
}

let backdrop ={
    position:'absolute',
    width:'100%',
    height: '1000%',
    top: '0px',
    left:'0px',
    zIndex: '9998',
    background:'rgba(0,0,0,0.3)'
}


return(
    <div>
        <div style={modal}>
        {this.props.children}
        </div>
        <div style={backdrop}onClick={e=>this.close(e)}/>
    </div>
)
}
}
export default Modal;
