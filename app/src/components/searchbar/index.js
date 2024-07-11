import search from '../../specs/ic_Search@2x.png'
import './styles.scss'

export default function Searchbar() {

  return (
    <header className='container'>

      <input className='search' type='text' placeholder='Nunca dejes de buscar'/>

      <section className='logo-container'>
        <img src={search} alt='searchLogo' />
      </section>
    </header>
  );
}