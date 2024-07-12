import { useState } from 'react'
import {useNavigate} from 'react-router'

import search from '../../specs/ic_Search.png'
import './styles.scss'


export default function Searchbar() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (query === '') return

    navigate(`/items?search=${query}`)

  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value)
  }


  return (
    <header className='searchbar-container'>

      <input 
      className='search' 
      type='text' 
      placeholder='Nunca dejes de buscar' 
      onChange={(e) => { handleOnChange(e) }} 
      onKeyPress={(e) => {handleKeyPress(e)}}
      />

      <div className='logo-container' onClick={() => { handleSearch() }}>
        <img src={search} alt='searchLogo' />
      </div>
    </header>
  );
}