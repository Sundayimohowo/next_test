import millisToMusicTime from "../../utils/millisToMusicTime";

const AlbumRow = ({data} :any) => {
    return (
        <tr>
            <td>
                <img src={data.artworkUrl60} className="img-fluid mr-2" alt={data.collectionName} />
                {data.collectionName}
            </td>
            <td>{data.artistName}</td>
            <td>{data.trackCount}</td>
            <td>{data.primaryGenreName}</td>
        </tr>
    )
}

export default AlbumRow;