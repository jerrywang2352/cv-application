import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props); 
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) {
        
    }
    
    render() {
        return (
            <div>
            {this.props.isTextArea
                ? <textArea type="text" placeholder={this.props.placeholder} onChange = {this.handleChange}/> 
                : <input type="text" placeholder={this.props.placeholder} onChange = {this.handleChange}/>
            }
            </div>
        ); 
    }
}

export default Input; 