import { useSelector } from "react-redux";
import { ArtistState } from "../../store/reducers/artistReducer";
import TableHead from "../TableHead";
import ArtistRow from "./ArtistRow";

const ArtistList = () => {
    const artists = useSelector<any, ArtistState[]>((state) => state.artist);
    
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
        </div>
    )
}

export default ArtistList;