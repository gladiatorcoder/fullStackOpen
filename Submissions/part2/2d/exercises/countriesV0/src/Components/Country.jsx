import React from 'react'

const Country = (props) => {

  console.log(props);

  return (
    <div className="countryInfo">
        <h4>{name.common}</h4>
        <div>Capital: {capital[0]}</div>
        <div>Area: {area}</div>
        <div>Languages
            <ul>
              {Object.values(languages).map(language => <li key={language}>{language}</li>)}
            </ul>
        </div>
        <img src={flags.png} />
    </div>
  )
}

export default Country;