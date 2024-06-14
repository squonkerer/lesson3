import Counter from "./Counter"

function City2({name, image}) {
    return (
    <div>
        <h2>City: {name}</h2>
        <img src={image} alt="pic"/>
        <Counter/>
    </div>
)
}

export default City2