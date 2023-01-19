import React, {Component} from 'react'
import Add from './buttons/Add'
import Delete from './buttons/Delete'
import uniqid from 'uniqid'; 
import Section from './Section'; 
import '../../styles/Form.css'

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
    }

    render() {
        const {educationID,experienceID,skillsID} = this.state; 
        const infoID = uniqid(); 
        return (
            <div className='form'>
                <div className='user-info'>
                    <div className='section'>
                        <Section show={true} sectionType="info" id={infoID}/>
                    </div>
                    <div className='section'>
                        <Section show={true} sectionType="education" id={educationID[educationID.length-1]}/>
                        <Delete sectionType="education"/>
                        <Add sectionType="education"/>
                    </div>
                    <div className='section'>
                        <Section show={true} sectionType="experience" id={experienceID[experienceID.length-1]}/>
                        <Delete sectionType="experience"/>
                        <Add sectionType="experience"/>
                    </div>
                    <div className='section'>
                        <Section show={true} sectionType="skills" id={skillsID[skillsID.length-1]}/>
                        <Delete sectionType="skills"/>
                        <Add sectionType="skills"/>
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

