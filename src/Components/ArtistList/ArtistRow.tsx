import millisToMusicTime from "../../utils/millisToMusicTime";

const MusicRow = ({data} :any) => {
    return (
        <tr>
            <td>#</td>
            <td>{data.artistName}</td>
            <td>{data.primaryGenreName}</td>
        </tr>
    )
}

export default MusicRow;