function Item({info}){
    return(
        <div style={{display:"inline-block", width:"30%"}}>
            <h2>{info.name}</h2>
            <hr />
            <p>{info.price}</p>
        </div>
    )
}

export default Item;//SO that this function can be used outside this file