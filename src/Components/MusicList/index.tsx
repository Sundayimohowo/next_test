import { useSelector } from "react-redux";
import { MusicState } from "../../store/reducers/musicReducer";
import TableHead from "../TableHead";
import MusicRow from "./MusicRow";

const MusicList = () => {

    const music = useSelector<any, MusicState[]>((state) => state.music);

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
        </div>
    )
}

export default MusicList;