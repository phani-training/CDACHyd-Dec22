const Product = ({item}) =>(
    <div className="card">
        <div className="row">
            <div className="col-md-4">
                <img src={item.picture} style={{width: '100%', height:'100%'}}/>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-text">{item.price}</p>
                    <p className="card-text">{item.quantity}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Product