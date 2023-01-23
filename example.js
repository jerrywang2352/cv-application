import React, {Component} from 'react'
import * as ReactDOM from 'react-dom'; 
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
            "educationID":[<Section show={true} sectionType="education" id={uniqid()}/>],
            //"experienceID":[<Section show={true} sectionType="experience" id={uniqid()}/>],
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        if (e.target.getAttribute('sectionType') == "education") {
            const newID = uniqid();     
            this.setState(prevState => ({
                educationID: [...prevState.educationID,<Section show={true} sectionType="education" id={newID}/>]     
            })); 
        }
        // } else if (e.target.getAttribute('sectionType') == "experience") {
        //     const newID = uniqid();     
        //     this.setState(prevState => ({
        //         experienceID: [...prevState.experienceID,<Section show={true} sectionType="experience" id={newID}/>]     
        //     })); 
        // }
    }

    handleDelete(e) {
        return; 
    }

    render() {
        const {educationID,experienceID,skillsID} = this.state; 
        const infoID = uniqid(); 
        return (
            <div className='form'>
                <div className='user-info'>
                    <div className="section">
                        <div className='section-header'>Personal Information</div>
                        <div id="all-info">
                            <Section show={true} sectionType="info" id={infoID}/>
                        </div>
                    </div>
                    <div className="section">
                        <div className='section-header'>Education</div>
                        <div id="all-education">
                            {this.state.educationID.map(section => section)}
                        </div>
                        <Delete sectionType="education"/>
                        <button sectionType="education" className="add" onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="section">
                        <div className='section-header'>Experience</div>
                        <div id="all-experience">
                            {this.state.experienceID.map(section => section)}
                        </div>
                        <Delete sectionType="experience"/>
                        <button sectionType="experience" className="add" onClick={this.handleAdd}>Add</button>
                    </div>
                    <div className="section">
                        <div className='section-header'>Skills</div>
                        <div id="all-skills">
                            <Section show={true} sectionType="skills" id={skillsID[skillsID.length-1]}/>
                        </div>
                        {/* <Delete sectionType="skills"/>
                        <button sectionType="skills" className="add" onClick={this.handleAdd}>Add</button> */}
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

