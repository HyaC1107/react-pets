import "./detail.css"
function Detail({target}) {



    return (<div className="detail">
        <img src={target.popfile} />
        <h3>
            {target.careNm}<br /> 
            <small>{target.careAddr}</small>
        </h3>
        
        <table>
            <tr>
                <td>접수날짜</td>
                <td>{target.happenDt}</td>
            </tr>
            <tr>
                <td>품종</td>
                <td>{target.kindCd}</td>
            </tr>
            <tr>
                <td>성별</td>
                <td>{target.sexCd}</td>
            </tr>
            <tr>
                <td>나이</td>
                <td>{target.age}</td>
            </tr>
            <tr>
                <td>몸무게</td>
                <td>{target.weight}</td>
            </tr>
            <tr>
                <td>상태</td>
                <td>{target.processState}</td>
            </tr>
            <tr>
                <td>세부사항</td>
                <td>{target.specialMark}</td>
            </tr>
            <tr>
                <td>연락처</td>
                <td>{target.officetel}</td>
            </tr>
        </table>        
        
    </div>);
}

export default Detail;