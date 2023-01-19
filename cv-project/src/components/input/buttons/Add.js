import React, {Component} from 'react'
import '../../../styles/Button.css';

class Add extends Component {
    constructor(props) {
        super(props); 
    }

    handleAdd(e) {
        
    }

    render() {
        return <button className="add" onClick={this.handleAdd}>Add</button>;
    }
}

export default Add