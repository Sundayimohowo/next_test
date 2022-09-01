import { EffectCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import AlbumList from "../Components/AlbumList";
import AllList from "../Components/AllList";
import ArtistList from "../Components/ArtistList";
import MusicList from "../Components/MusicList";
import SearchNav from "../Components/SearchNav";
import { getAlbum, getAll, getArtist, getMusic } from "../store/actions";

const getActions :any = { all: getAll, album: getAlbum, music: getMusic, artist: getArtist }

const Search = () => {
  const dispatch = useDispatch();
  const [ searchParams ] = useSearchParams();
  const [ term, setTerm ] = useState<string | null>(searchParams.get('term'))
  const [ active, setActive ] = useState<string>('all');
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [ loading, setLoading ] = useState<any>({});
  const [ scrollLoading, setScrollLoading ] = useState<any>({});
  const [ page, setPage ] = useState<any>({all: 1, music: 1, album: 1, artist: 1})

  const navigate = useNavigate();

  const fetchMedia = async (media :string, setLoading :any, page? :number, overwrite? :boolean) :Promise<void> => {
    setLoading((prev :any) => {
      let newLoading :any = { ...prev };
      newLoading[media] = true;
      return newLoading;
    });    
    await dispatch(await getActions[media](term, page || 1, !!overwrite));
    setLoading((prev :any) => {
      let newLoading :any = { ...prev };
      newLoading[media] = false;
      return newLoading;
    });
  }

  useEffect(() :ReturnType<EffectCallback> => {
    const getAddition = async () => {
      let nextPage = page[active] + 1;
      let newPage :any = { ...page };
      newPage[active] = nextPage;
      setPage(newPage);
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fetchMedia(active, setScrollLoading, nextPage);
      }
    }
    window.onscroll = function(ev) {
      getAddition();
    };
    getAddition();

    return ():void => {window.onscroll = null;}
  }, [])

  useEffect(() => {
    if(term) {
      fetchMedia('all', setLoading, 1, true);
      fetchMedia('music', setLoading, 1, true);
      fetchMedia('album', setLoading, 1, true);
      fetchMedia('artist', setLoading, 1, true); 
    }    
  }, [term]);

  useEffect(() => {
    if(term) {
      navigate('/search?term=' + term);
    }    
  }, [term]);

  return (
    <div className="Search h-100">
      <div className="pt-3 nav-wrapper">
        <SearchNav active={active}setActive={setActive} setQuery={setTerm} query={term || ''} />
      </div>
      
      <div className="py-3 h-100" ref={scrollRef}>
        { active == 'all'? (
          loading.all? <>Loading...</>:
          <AllList />
        ): null }
        { active == 'music'? (
          loading.music? <>Loading...</>:
          <MusicList />
        ): null }
        { active == 'album'? (
          loading.album? <>Loading...</>:
          <AlbumList />
        ): null }
        { active == 'artist'? (
          loading.artist? <>Loading...</>:
          <ArtistList />
        ): null }
      </div>
       
    </div>
  );
}

export default Search;