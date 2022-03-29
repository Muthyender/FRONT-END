import React, {useState, useCallback} from 'react'

function UseCallbackComp() 
{
    const [skill, setSkill] = useState("")
    const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"])
    
    const handleChangeInput = (e) =>
    {
        setSkill(e.target.value)
    }

    const handleAddSkill = () =>
    {
        setSkills(skills.concat(skill))
    }

    //Without using useCallback()
    // const handleRemoveSkill = (skill) =>
    // {
    //     setSkills(skills.filter(s => s !== skill))
    // }

    //Using useCallback()
    const handleRemoveSkill = useCallback(skill =>
    {
        setSkills(skills.filter(s => s !== skill))
    }, [skills])

    return (
        <>
            <input type="text" onChange={handleChangeInput}/>

            <button onClick={handleAddSkill}>Add Skill</button>
            <hr />
            <SkillList skills = {skills} handleRemoveSkill={handleRemoveSkill}/>
        </>  
    )
}


const SkillList = React.memo(({skills, handleRemoveSkill}) =>
{
    console.log('rendering')
    return (
      <ul>
        {
          skills.map((skill, index) =>
            (
              <li key={index} onClick={() => handleRemoveSkill(skill)}>
                  {skill}
              </li>
            )
            )
          }
      </ul>
    )
  })
  
export default UseCallbackComp
  