import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ThumbDetail from '../components/ThumbDetail';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [mode, setMode] = useState(true);
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></li> Light Mode');

    useEffect(() => {
        getCountries();
    },[])

    const getCountries = async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        console.log(data)
        await setCountries(data)
    }

    const toggleDarkMode = () => {
        if(mode) {
            document.documentElement.classList.add('dark')
            setToggleBtn('<i class="fas fa-moon"></li> Dark Mode')
            setMode(current => current = !current)
        }

        if(!mode){
            document.documentElement.classList.remove('dark')
            setToggleBtn('<i class="far fa-sun"></li> Light Mode')
            setMode(current => current = !current)
        }
    }

    const searchCountry = async (e) => {
        const term = e.target.value;
        if(term.length < 3 || term === '') return 
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`)
        const data = await res.json()
        await setCountries(data)
    }

    const filterByRegion = async (e) => {
        const region = e.target.value;
        let res = {};

        console.log(region)
        if(region === '') {
            res = await fetch('https://restcountries.eu/rest/v2/all')
        } else {
            res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        }

        const data = await res.json()
        await setCountries(data);
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the world</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={toggleDarkMode} dangerouslySetInnerHTML={{__html : toggleBtn}}></button>
                    </div>
                </div>
            </div>
            <div className="flex container mx-auto mb-16">
                <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input type="text"
                    placeholder="Search for a country..."
                    className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700"
                    onChange={searchCountry}
                />
                <select className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={filterByRegion}>
                    <option value="">filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div className="container grid grid-cols-4 gap-16 mx-auto">
                { countries.map((country, index) => <Link to={{pathname : 'details', state: country}} key={index}>
                    <ThumbDetail 
                        title={country.name}
                        image_url={country.flag}
                        population={country.population}
                        region ={country.region}
                        capital={country.capital}
                    />
                </Link> )}
            </div>
        </div>
    )
}

export default Home
