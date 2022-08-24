import "./item.css"

function Item({data, onSelected}) {


    return (<div className="item" onClick={()=>onSelected(data)}>
        <img src={data.filename} alt={"Thumbnail"} />
        <div className="inform">
            <p>
                {data.kindCd} ({data.colorCd})
            </p>
            <p>
                {data.orgNm} {data.happenPlace}
            </p>
        </div>
    </div>  );
}

export default Item;