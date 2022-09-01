const contentMap :any = {
    artist: {type: 'artistType', content: 'artistName', artist: true},
    track: {type: 'kind', content: 'trackName'},
    collection: {type: 'collectionType', content: 'collectionName'}
}

const ItemCard = ({data} :{data :any}) => {
    return (
        <div className="col-lg-6 col-xl-4 my-3">
            <div className="card all-card d-flex justify-content-center p-3">
                <div className="d-flex">
                    <div className="all-card-img">
                        {
                            data.artworkUrl100?
                            <img className="img" src={data.artworkUrl100}/>:
                            null
                        } 
                    </div>
                                       
                    <div className="card-body d-flex flex-column justify-content-center">
                        <p className="card-text m-0">
                        {data[contentMap[data.wrapperType].content]}
                            
                        </p>
                        <i className="text-capitalize text-secondary">
                            {data[contentMap[data.wrapperType].type]} 
                            {!contentMap[data.wrapperType].artist? ' - ' + data.artistName: null}
                        </i>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ItemCard;