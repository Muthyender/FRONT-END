import React from 'react'
import './Header.css'

function Header({book}) 
{
    return (
        <>
            <div className='top'>
                <div className="filter">
                    <button className='filter'>Filters</button>
                </div>

                <div className="right">
                    <label htmlFor='entries'>Entries per page: </label>
                    <select name="entries" id="entries" >
                        <option value={'10'}>10</option>
                        <option value={'20'}>20</option>
                        <option value={'30'}>30</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Header