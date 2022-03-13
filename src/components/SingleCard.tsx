

type Props = {
    keyId: number;
    name: string;
    href: string;
    src: string;
    item: any;
    setDataModal: any;
    artist: Array<string>;
    album: string;
    popularity: number;
    setViewModal: any;
}

export const SingleCard = ({keyId, name, href, src, artist, album, popularity, setDataModal, setViewModal}: Props) => {

    const showModal= (): void => {
        setDataModal({
            name: name,
            artist: artist,
            album: album,
            url: href,
            id: keyId,
            popularity: popularity,
        })
        setViewModal(true)
    }

    return (
        <div className="card" key={keyId} style={{width: '18rem'}}>
            <img src={src} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary">Ir a Spotify</a>
                <button onClick={showModal} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ver información
                </button>
            </div>
        </div>
    )
}
