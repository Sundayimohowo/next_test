import { ChangeEvent, FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';

function Home() {
  const [ query, setQuery ] = useState<string>('');
  const navigate = useNavigate();

  const submitSearch = (e :FormEvent) => {
    e.preventDefault();
    navigate('/search?term=' + query);
  }
  return (
    <div className="Home">
      <div className='form-container d-flex justify-content-center'>
        <form className='search-bar w-100 d-flex align-items-center m-auto' action='/search'
        onSubmit={submitSearch}>
          <input type="text" className='text-white' placeholder='Search music, artist or album'
          onChange={(e :ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
          <button className='btn btn-primary d-none d-sm-block' type="submit"><FaSearch size={20} /></button>
        </form>
      </div>
        
    </div>
  );
}

export default Home;
