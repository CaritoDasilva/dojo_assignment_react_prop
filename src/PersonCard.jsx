import React, { useState } from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, age, hair } = props
    const [ageInCOmponent, setAgeInCOmpoennt] = useState(age)
    
        return (
            <div>
                <h1>Hi {lastName}, {firstName}</h1>
                
                <h5>Hair: {hair}</h5>
                <h5>Age: {ageInCOmponent}</h5>
                <button onClick={() => setAgeInCOmpoennt(ageInCOmponent + 1)}>Add a year!</button>

            </div>
        )
    
}

export default PersonCard
