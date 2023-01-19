import React, {Component} from 'react'
import '../../../styles/Button.css';

class Delete extends Component {
    constructor() {
        super(); 
    }

    handleDelete(e) {
        
    }

    render() {
        return <button className="delete" onClick={this.handleDelete}>Delete</button>;
    }
}

export default Delete; 