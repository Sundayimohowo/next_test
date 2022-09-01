import { EffectCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { getMusic } from '../../store/actions';
import { MusicState } from "../../store/reducers/musicReducer";
import TableHead from "../TableHead";
import MusicRow from "./MusicRow";

const MusicList = ({term} :{term :string}) => {

    const music = useSelector<any, MusicState[]>((state) => state.music);
    const dispatch = useDispatch();
    const pageRef = useRef<number>(1);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() :ReturnType<EffectCallback> => {
        const getAddition = async () => {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLoading(true);
            pageRef.current += 1;
            await dispatch(await getMusic(term, pageRef.current, false));
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
                    music.length ? (
                        <table className="table table-hover table-dark music-table">
                            <TableHead items={['song', 'artist', 'album', 'duration']} />
                            <tbody>
                                {
                                    music.map((m, i) => (
                                        <MusicRow data={m} key={i} />
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : <div className='lead text-center mt-5'>No result found!</div>
                }
            </div>
            {loading? <div className="lead text-center">Loading new items...</div>: null}
        </div>
    )
}

export default MusicList;