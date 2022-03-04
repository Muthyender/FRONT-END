import React from "react";
import './CollegeStudents.css'

import devImg from '../../Images/developer.jpeg' //(Importing a local image)

class CollegeStudents extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            students:[
                {
                    id:1,
                    name: 'Lakshman',
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci?',
                    course: 'Full Stack',
                    techStack: 'MERN',
                    batch: 'Batch 11',
                },
                {
                    id:2,
                    name: 'Ram',
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci?',
                    course: 'Backend',
                    techStack: 'MEAN',
                    batch: 'Batch 12',
                },
                {
                    id:3,
                    name: 'Gopal',
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci?',
                    course: 'Frontend',
                    techStack: 'REACT',
                    batch: 'Batch 13',
                },
            ]
        }
    }
    
    render()
    {
        const {students} = this.state

        //Without using .map() we need to write for all the students

        // const [student1, student2, student3] = [students[0], students[1], students[2]]

        return(
            <>
                {
                    students.map((student, index) => // We can use return keyword and give the code in curly braces also
                        <div className='student-data' key={index}>

                            <h2>{student.name}</h2>
                            <p>{student.bio}</p>
                            <h3>Course: {student.course}</h3>
                            <h3>Tech Stack: {student.techStack}</h3>
                            <h3>Batch: {student.batch}</h3>
                            
                            <img height='150px' src={devImg} alt="Developer" /> {/* Local Image */}

                        </div>
                    ) 
                }
            </> 

            //Without the use of loop or map function

            // <>
            //     <div className="student-data">
            //         <h2>{student1.name}</h2>
            //         <p>{student1.bio}</p>
            //         <h3>Course: {student1.course}</h3>
            //         <h3>Tech Stack: {student1.techStack}</h3>
            //         <h3>Batch: {student1.batch}</h3>
            //     </div>  

            //     <div className="student-data">
            //         <h2>{student2.name}</h2>
            //         <p>{student2.bio}</p>
            //         <h3>Course: {student2.course}</h3>
            //         <h3>Tech Stack: {student2.techStack}</h3>
            //         <h3>Batch: {student2.batch}</h3>
            //     </div>  

            //     <div className="student-data">
            //         <h2>{student3.name}</h2>
            //         <p>{student3.bio}</p>
            //         <h3>Course: {student3.course}</h3>
            //         <h3>Tech Stack: {student3.techStack}</h3>
            //         <h3>Batch: {student3.batch}</h3>
            //     </div> 
            // </>                
        )
    }
}

export default CollegeStudents