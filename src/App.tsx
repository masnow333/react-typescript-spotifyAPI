import { useState } from "react";
import { Cards } from "./components/Cards";
import { Modal } from "./components/Modal";

export interface IProps {
  name: string;
  artist: [string];
  album: string;
  url: string;
  id: number;
  popularity: number;
}


function App() {
  const [dataModal, setDataModal] = useState<IProps>({
    name: '',
    artist: [''],
    album: '',
    url: '',
    id: 0,
    popularity: 0,
  })

  const [viewModal, setViewModal] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("");
  const [search, setSearch] = useState<string>('')
  const [previous, setPrevious] = useState<string>('')
  const [next, setNext] = useState<string>('')
  const [provideUrl, setProvideUrl] = useState('')

	const handleInputChange = (e:any) => {
		setInputValue(e.target.value);
	};

  console.log(previous, next)
  console.log((previous === undefined || previous === null || previous === ''), (next === undefined || next === null || next === ''))


  return (
    < >
      <Modal 
        name={dataModal.name} 
        artist={dataModal.artist} 
        album={dataModal.album} 
        url={dataModal.url} 
        id={dataModal.id} 
        popularity={dataModal.popularity}
        setViewModal={setViewModal}
        viewModal={viewModal} />

      <h1>Spotify</h1>
      <hr />   

      <div className="input-group mb-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button onClick={() => setSearch(inputValue)} className="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <Cards setDataModal={setDataModal} setViewModal={setViewModal} search={search} setPrevious={setPrevious} setNext={setNext} provideUrl={provideUrl} /> 
      <div className="d-flex w-100 justify-content-center">
        <button 
          type="button" 
          className={`btn btn-outline-secondary ${ (previous === undefined || previous === null || previous === '') && 'disabled'}`}
          onClick={() => setProvideUrl(previous)}>
            Previous
        </button>
        <button 
          type="button" 
          className={`btn btn-outline-secondary ${ (next === undefined || next === null || next === '') && 'disabled'}`}
          onClick={() => setProvideUrl(next)}>
            Next
        </button>
      </div>
      
    </>
  );
}

export default App;
