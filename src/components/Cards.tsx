import { useEffect, useState } from 'react';
import { TData, useFetchSearch } from '../hooks/useFetchSearch';
import { SingleCard } from './SingleCard';


interface IResponse {
    tracks: {
        href: string;
        items: Array<object>;
        limit: number;
        next: any;
        offset: number;
        previous: any;
        total: number;
    };
    artists: any;
    espisodes: any;
    playlists: any;
    shows: any;
    albums: any;
}

export const Cards = ({setDataModal, setViewModal, search, setPrevious, setNext, provideUrl}:any) => {


    let {data:fetch, loading}:TData = useFetchSearch(search, provideUrl)

    const [data, setData] = useState<IResponse>({
        tracks: {
            href: '',
            items: [],
            limit: 0,
            next: undefined,
            offset: 0,
            previous: undefined,
            total: 0,
        },
        artists: {},
        espisodes: {},
        playlists: {},
        shows: {},
        albums: {},
    })

    console.log(data.tracks)
    
    useEffect(() => {
        if(!loading){
            setData(fetch)
            setPrevious(fetch.tracks.previous)
            setNext(fetch.tracks.next)
        }       
    }, [loading, search, fetch, provideUrl])

    const render = (
        <div className="d-flex flex-wrap">
            {data.tracks.items.map(
                (item:any) => (
                    <SingleCard 
                        keyId={item.id} 
                        name={item.name} 
                        href={item.external_urls.spotify} 
                        src={item.album.images[0].url} 
                        item={item}
                        artist={item.artists} 
                        album={item.album.name} 
                        popularity={item.popularity}
                        setDataModal={setDataModal}
                        setViewModal={setViewModal} />
                ))}
        </div>
    )

    return (
        <>
            {search === '' ? 'Search' : data.tracks.items.length === 0 ? 'No tracks' : render}
        </>
    )
}
