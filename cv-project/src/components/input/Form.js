import React, {Component} from 'react'
import Delete from './buttons/Delete'
import uniqid from 'uniqid'; 
import Section from './Section'; 
import '../../styles/Form.css'
import '../../styles/Button.css';

class Form extends Component {
    constructor() {
        super(); 
        this.state = {
            "info": {
                "First": '',
                "Last": '',
                "Address": '',
                "Phone": '',
                "Email": '',
            },
            "educationID":[uniqid()],
            "experienceID":[uniqid()],
            "skillsID":[uniqid()], 
        };
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(e) {
        if (e.target.getAttribute('sectionType') == "education") {
            alert(`${e.target.getAttribute('sectionType')} button clicked`); 
        }
    }

    render() {
        const {educationID,experienceID,skillsID} = this.state; 
        const infoID = uniqid(); 
        return (
            <div className='form'>
                <div className='user-info'>
                    <div className="section">
                        <div id="all-info">
                            <Section show={true} sectionType="info" id={infoID}/>
                        </div>
                    </div>
                    <div className="section">
                        <div id="all-education">
                            <Section show={true} sectionType="education" id={educationID[educationID.length-1]}/>
                        </div>
                        <Delete sectionType="education"/>
                        <button sectionType="education" className="add" onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="section">
                        <div id="all-experience">
                            <Section show={true} sectionType="experience" id={experienceID[experienceID.length-1]}/>
                        </div>
                        <Delete sectionType="experience"/>
                        <button sectionType="experience" className="add" onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="section">
                        <div id="all-skills">
                            <Section show={true} sectionType="skills" id={skillsID[skillsID.length-1]}/>
                        </div>
                        <Delete sectionType="skills"/>
                        <button sectionType="skills" className="add" onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className='submit'></div>
                </div>
                <div className='output'>

                </div>
            </div>
        );
    }

}

export default Form;   

