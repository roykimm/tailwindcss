import React, { useState  } from 'react'
import { useLocation, useHistory } from 'react-router-dom';

const Details = () => {

    const [mode, setMode] = useState(true);
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></li> Light Mode');

    let {state} = useLocation()
    let history = useHistory()

    const goHomeBtn = (e) => {
        history.push("/");
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
            <div className="container mx-auto mb-16">
                <button className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
                    onClick={goHomeBtn}
                >
                    <i className="fa fa-arrow-left"></i>Back
                </button>
            </div>
            <div className="container flex mx-auto p-8 pl-0 pr-0">
                <img src={state.flag}  className="w-1/2 pr-8" alt={state.name} />
                <div className="p-8 pl-0">
                    <h2 className="font-bold text-2xl mb-8">{state.name}</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p>Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.nativeName}</span></p>
                        <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.population}</span></p>
                        <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.region}</span></p>
                        <p>subregion: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.subregion}</span></p>
                        <p>capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.capital}</span></p>
                        <p>topLevelDomain: <span className="dark:text-gray-400 text-gray-700 text-sm"></span>{state.topLevelDomain[0]}</p>
                        <p>Currencies<span className="dark:text-gray-400 text-gray-700 text-sm">{state.currencies.map((cur) => cur.name)}</span></p>
                        <p>Language: <span className="dark:text-gray-400 text-gray-700 text-sm"></span>{state.languages.map(lang => lang.name + ", ")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
