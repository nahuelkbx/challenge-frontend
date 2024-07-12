import search from '../../specs/ic_Search.png'
import './styles.scss'

export default function Searchbar() {

  return (
    <header className='searchbar-container'>

      <input className='search' type='text' placeholder='Nunca dejes de buscar'/>

      <div className='logo-container'>
        <img src={search} alt='searchLogo' />
      </div>
    </header>
  );
}