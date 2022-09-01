import TableHead from "../TableHead";
import AlbumRow from "./AlbumRow";
import { useSelector } from "react-redux";
import { AlbumState } from "../../store/reducers/albumReducer";
import { EffectCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getAlbum } from "../../store/actions";

const AlbumList = ({term} :{term :string}) => {
    const albums = useSelector<any, AlbumState[]>((state) => state.album);
    const dispatch = useDispatch();
    const pageRef = useRef<number>(1);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() :ReturnType<EffectCallback> => {
        const getAddition = async () => {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLoading(true);
            pageRef.current += 1;
            await dispatch(await getAlbum(term, pageRef.current, false));
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
                    albums.length ? (
                        <table className="table table-hover table-dark music-table">
                            <TableHead items={['album', 'artist', 'songs', 'primary genre']} />
                            <tbody>
                                {
                                    albums.map((album, i) => (
                                        <AlbumRow data={album} key={i} />
                                    ))
                                }

                            </tbody>
                        </table>
                    ) : <div className='lead text-center mt-5'>No result found!</div>
                }
            </div>
            {loading? <div className="lead text-center">Loading new items...</div>: null}
        </div >
    )
}

export default AlbumList;