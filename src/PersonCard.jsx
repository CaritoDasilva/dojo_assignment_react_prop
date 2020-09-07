import React, { Component } from 'react'

export default class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hair } = this.props
        return (
            <div>
                <h1>Hi {lastName}, {firstName}</h1>
                
                <h5>Hair: {hair}</h5>
                <h5>Age: {age}</h5>

            </div>
        )
    }
}
