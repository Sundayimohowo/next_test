import TableHead from "../TableHead";
import AlbumRow from "./AlbumRow";
import { useSelector } from "react-redux";
import { AlbumState } from "../../store/reducers/albumReducer";

const AlbumList = () => {
    const albums = useSelector<any, AlbumState[]>((state) => state.album);

    return (
        <div className="row">
            <div className="col-12">
                {
                    albums.length ? (
                        <table className="table table-hover table-dark music-table">
                            <TableHead items={['album', 'artist', 'songs', 'primary genre']} />
                            <tbody>
                                {
                                    albums.length ? (
                                        albums.map((album, i) => (
                                            <AlbumRow data={album} key={i} />
                                        ))
                                    ) : <div className='lead text-center mt-5'>No result found!</div>
                                }

                            </tbody>
                        </table>
                    ) : <div className='lead text-center mt-5'>No result found!</div>
                }
            </div>
        </div >
    )
}

export default AlbumList;