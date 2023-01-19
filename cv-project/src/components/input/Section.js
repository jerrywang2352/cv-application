import React, {Component} from 'react'
import Input from './Input'
import Add from './buttons/Add'
import Delete from './buttons/Delete'

class Section extends Component {
    constructor(props) {
        super(props); 
    }
    
    render() {
        const {id,show} = this.props;

        if (show) {
            if (this.props.sectionType == 'info') {
                return (
                    <div className='section' id={id}>
                        <div className='user-input'>
                            <div className='section-header'>Personal Information</div>
                            <Input placeholder='First Name' isTextArea={false}/>
                            <Input placeholder='Last Name' isTextArea={false}/>
                            <Input placeholder='Address Name' isTextArea={false}/>
                            <Input placeholder='Phone' isTextArea={false}/>
                            <Input placeholder='Email' isTextArea={false}/>
                        </div>
                    </div>
                );
            } else if (this.props.sectionType == "education") {
                return (
                    <div className='section' id={id}>
                        <div className='section-header'>Education</div>
                        <div className='user-input'>
                            <Input placeholder='University Name' isTextArea={false}/>
                            <Input placeholder='City' isTextArea={false}/>
                            <Input placeholder='State' isTextArea={false}/>
                            <Input placeholder='Degree' isTextArea={false}/>
                            <Input placeholder='From' isTextArea={false}/>
                            <Input placeholder='To' isTextArea={false}/>
                            <Input placeholder='Coursework' isTextArea={true}/>
                            <Delete sectionType="education"/>
                            <Add sectionType="education"/>
                        </div>
                    </div>
                );
            } else if (this.props.sectionType == "experience") {
                return (
                    <div className='section' id={id}>
                        <div className='section-header'>Experience</div>
                        <div className='user-input'>
                            <Input placeholder='Position' isTextArea={false}/>
                            <Input placeholder='Company' isTextArea={false}/>
                            <Input placeholder='City' isTextArea={false}/>
                            <Input placeholder='State' isTextArea={false}/>
                            <Input placeholder='From' isTextArea={false}/>
                            <Input placeholder='To' isTextArea={false}/>
                            <Input placeholder='Description' isTextArea={true}/>
                            <Delete sectionType="experience"/>
                            <Add sectionType="experience"/>
                        </div>
                    </div>
                );
            } else if (this.props.sectionType== "skills") {
                return (
                    <div className='section' id={id}>
                        <div className='section-header'>Skills</div>
                        <div className='user-input'>
                            <Input placeholder='Languages' isTextArea={false}/>
                            <Input placeholder='Frameworks' isTextArea={false}/>
                            <Input placeholder='Libraries' isTextArea={false}/>
                            <Input placeholder='Developer Tools' isTextArea={false}/>
                            <Delete sectionType="skills"/>
                            <Add sectionType="skills"/>
                        </div>
                    </div>
                );
            }
        }
    }
}

export default Section 