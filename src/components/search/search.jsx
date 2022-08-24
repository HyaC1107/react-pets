import { useEffect } from "react";
import { useRef } from "react";
import "./search.css"

function Search({onSearch,locations}) {
    const bgnde = useRef();
    const endde = useRef();
    const upr_cd = useRef();
    const up_kind_cd = useRef();

    useEffect(()=>{
        const today =  new Date().toISOString().slice(0,10);
        endde.current.value= today;
    },[]);

    const searchHandle = (event) =>{
        event.preventDefault();
        //console.log(bgnde.current.value, upr_cd.current.value);
        onSearch(
            bgnde.current.value.replaceAll("-",""),
            endde.current.value.replaceAll("-",""),
            upr_cd.current.value,
            up_kind_cd.current.value
        );
    }

    const refresh = () =>{
        window.location.replace("/")
    }
    return (<div className="search">
        <div className="logo" onClick={refresh}>
            <img src="img/logo.png" /><p>유기동물 조회</p>
        </div>
        <form onSubmit={searchHandle} className="search-form">
            <div className="dateBox">
                <input type="date" ref={bgnde} />
                <span>~</span>
                <input type="date" ref={endde} /> 
            </div>
            <div className="submitBox">
                <select ref={upr_cd}>
                    <option value="">전체</option>
                    {locations.map((location) => {
                        return (<option value={location.orgCd} key={location.orgCd}>
                            {location.orgdownNm}
                        </option>);
                    })}
                </select>
                <select ref={up_kind_cd}>
                    <option value="">전체</option>
                    <option value="417000">댕댕이</option>
                    <option value="422400">냐옹이</option>
                    <option value="429900">기타</option>
                </select>
                <button type="submit">🍳</button>
            </div>
        </form>
    </div>  );
}

export default Search;