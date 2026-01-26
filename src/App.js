import { useEffect, useState } from 'react';
import './App.css';
import Detail from './components/detail/detail';
import List from './components/list/list';
import LoadingSpinner from './components/loading/loadingspinner';
import Search from './components/search/search';


function App() {
  document.title="유기동물 조회서비스"

  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();
  const [locations, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(()=>{
    setIsLoading(true);
    const key= process.env.REACT_APP_API_KEY;
    const uri = `https://apis.data.go.kr/1543061/abandonmentPublicService_v2/abandonmentPublic_v2?serviceKey=${key}&_type=json`;
    // console.log(key)
    fetch(uri)
      .then(response => response.json())
      .then(json=>{
        console.log(json.response.body);
        setPets(json.response.body.items.item);
        setIsLoading(false);
      })
      .catch(e=>{
        console.log(e.message);
      })

    // 시도 코드 가져오기
    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicService_v2/sido_v2?numOfRows=17&serviceKey=${key}&_type=json`)
    .then(response => response.json())
    .then(json=>{
      setLocation(json.response.body.items.item);
    })
    .catch(e=>{
      console.log(e.message);
    })
    
  },[]);

  

  const handleSearch = (bgnde, endde, upr_cd, up_kind_cd) =>{
    const key= process.env.REACT_APP_API_KEY
    setIsLoading(true);
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicService_v2/abandonmentPublic_v2?serviceKey=${key}&_type=json&numOfRows=60&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_cd}&upkind=${up_kind_cd}`)
      .then(response => response.json())
      .then(json=>{
        setPets(json.response.body.items.item);
        setSelected(null);
        setIsLoading(false);
      })
      .catch(e=>{
        console.log(e.message);
        setIsLoading(false);
      })

    
  }


  const handleSelected = (data) =>{
    setSelected(data);
  }


  return (
    <div className="wrap">
      {isLoading ? <LoadingSpinner /> : <></>}
      <Search onSearch={handleSearch} locations={locations}/>
      <div className='app'>
        { selected && <Detail target = {selected}/>}
        <List pets={pets} onSelected={handleSelected}/>  
      </div>
    </div>
  );
}

export default App;
