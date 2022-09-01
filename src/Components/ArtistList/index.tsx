import { EffectCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { ArtistState } from "../../store/reducers/artistReducer";
import { getArtist } from '../../store/actions';
import TableHead from "../TableHead";
import ArtistRow from "./ArtistRow";
import { useDispatch } from 'react-redux';

const ArtistList = ({term} :{term :string}) => {
    const artists = useSelector<any, ArtistState[]>((state) => state.artist);
    const dispatch = useDispatch();
    const pageRef = useRef<number>(1);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() :ReturnType<EffectCallback> => {
        const getAddition = async () => {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLoading(true);
            pageRef.current += 1;
            await dispatch(await getArtist(term, pageRef.current, false));
            setLoading(false);
          }
        }
        window.onscroll = function(ev) {
          getAddition();
        };
        getAddition();
    
        return ():void => {window.onscroll = null;}
    }, [])
    
    return (
        <div className="row">
            <div className="col-12">
                {
                    artists.length? (
                        <table className="table table-hover table-dark music-table">
                            <TableHead items={['', 'artist', 'primary genre']} />
                            <tbody>
                                {
                                    artists.map((artist, i) => (
                                        <ArtistRow data={artist} key={i} />
                                    ))
                                }
                            </tbody>
                            </table>   
                    ): <div className='lead text-center mt-5'>No result found!</div>
                }                    
            </div>
            {loading? <div className="lead text-center">Loading new items...</div>: null}
        </div>
    )
}

export default ArtistList;