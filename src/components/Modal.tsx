import '../styles/Modal.css'

type TProps = {
    name: string;
    artist: Array<string>;
    album: string;
    url: string;
    id: number;
    popularity: number;
    setViewModal: any;
    viewModal: boolean;
}

export const Modal = ({name, artist, album, url, id, popularity, setViewModal, viewModal}:TProps) => {
    
    const hideModal = ():void => {
        setViewModal(false)
    }

    return (
        <>
            <div className={`modal ${viewModal && 'fade'}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{name}</h5>
                        </div>
                        <div className="modal-body">
                            {/* <p>Id: {id}</p> */}
                            <p>Artist: {artist.map( (e:any) => `${e.name}, `)}</p>
                            <p>Album: {album}</p>
                            <p>Popularity: {popularity}</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={hideModal} type="button" className="btn btn-secondary">Close</button>
                            <a href={url} className="btn btn-primary">Go to spotify</a>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
