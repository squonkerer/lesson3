import Counter from "./Counter";

function City(props) {
    console.log(props)

    let cityStyle = "";
        if(props.country === "GB"){
            cityStyle = "gb-city"
        }
    
    let remarks = ""
    if (props.country === "GB"){
        remarks = (<p>{props.remarks}</p>)
    }
        
    return(
        <div>
            <h2 className={cityStyle}>{props.name}, {props.country} {remarks}</h2>
            <Counter/>
        </div>
    )
}

export default City