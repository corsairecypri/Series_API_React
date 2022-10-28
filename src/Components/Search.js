import React from 'react'

import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'


export function Search() {

    const [film, setFilm] = useState([])

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchTerm = (e) => {

        let value = e.target.value;

        setSearchTerm(value);
    }


    const submit = (e) => {
        //Pour éviter le rechargement de la page avec un submit
        //on utilise le preventDefault
        e.preventDefault();

        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then(res => res.json())
        .then(json => setFilm(json))
    }

    


    return(
        <div>
            <form onSubmit={submit}>
                <input 
                type="text" name="searchBar" 
                id="searchBar" placeholder="Tapez le nom d'un film"
                onChange={handleSearchTerm}/>
                

                <input type="submit" value="Envoyer" />
            </form>

            <div className="search__results">

                {film?.filter((val) => {

                    return val.show.name.toLowerCase().includes(searchTerm.toLowerCase())
                }).map((val) => {


                    return(
                        <div className="search__result" key={val.show?.id}>

                            <Link to={`${val.show.id}`} > {val.show?.name}</Link>
                            <img src={`${val.image?.medium}` } />
                        </div>
                    )

                })
                
                }
            </div>

        </div>
    )


}