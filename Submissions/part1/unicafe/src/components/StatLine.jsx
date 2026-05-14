import React from 'react'

const StatLine = ({text, score}) => {
    if((text && score !== undefined)){
        return (
            <tr><td>{text}:</td><td>{score}</td></tr>
        )
    }
}

export default StatLine;