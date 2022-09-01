import millisToMusicTime from "../../utils/millisToMusicTime";

const MusicRow = ({data} :any) => {
    return (
        <tr>
            <td>
                <img src={data.artworkUrl60} className="img-fluid mr-2" alt={data.trackName} />
                {data.trackName}
            </td>
            <td>{data.artistName}</td>
            <td>{data.collectionName}</td>
            <td>{millisToMusicTime(data.trackTimeMillis)}</td>
        </tr>
    )
}

export default MusicRow;