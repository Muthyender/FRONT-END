import React, {useState} from 'react'
import SkillList from './SkillList'

function ReactMemo() 
{ 
    const [skill, setSkill] = useState("")
    const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"])

    const [error, setError] = useState('')
    
    const handleChangeInput = (e) =>
    {
        if(e.target.value.length <= 5)
            setError('The length must be greater thana 5')
        else
            setError('')
            
        setSkill(e.target.value)
    }

    const handleAddSkill = (e) =>
    {
        setSkills(skills.concat(skill))
    }

    return (
        <>
            <input type="text" onChange={handleChangeInput}/>

            <button onClick={handleAddSkill}>Add Skill</button>
            <hr />
            <SkillList skills = {skills} />
        </>
        
    )
}

export default ReactMemo