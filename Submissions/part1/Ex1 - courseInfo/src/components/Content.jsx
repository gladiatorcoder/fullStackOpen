import React from 'react'
import Part from './Part'

const Content = ({parts = []}) => {
  if(parts.length > 0){
    return (
        <div>
            {
              parts.map((part, index) => {
                return <Part key={part.name} part={part} />
              })
            }
        </div>
    )
  }else{
    return(
        <div>No parts found!</div>
    )
  }
}

export default Content