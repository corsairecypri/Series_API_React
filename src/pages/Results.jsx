import React, { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import "../styles/Person.css"

export const Results = ( ) => {

    const { id } = useParams()


    const [val, setVal] = useState({})

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then(res => res.json())
        .then(json => setVal(json))
    }, [])


        
    

    return(
        
        <div className="search__results">

            <p > {val.name}</p>

            <img src={`${val.image?.medium}` } /> 

            <p> {val.summary} </p>

             <p>Cast :</p>

             <div className="cast">

                {val._embedded?.cast?.map((p) => {
                    return(

                        <div className="person">

                            <p className="name"> {p.person?.name}  as {p.character?.name} </p>
        
                            <img src={`${p.person?.image?.medium}` } />
                        </div>
                    )
                })}

             </div>
        
        </div>

        

        
    )
}