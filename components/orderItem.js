import Link from "next/link";

export default function OrderItem( { order } ) {
    return (
            <div  className="card d-flex" style={{width: "100%", maxHeight: "300px"}}>
              
                <div className="info">
                    <h5 className="card-title text-capitalize">
                        { 
                            order.delivered ? <span className="text-success">order delivered</span>
                            : <span className="text-danger"> not delivered</span>
                        }
                    </h5>
                </div>

                <p className="card-text">Order price : { order.total }</p>
                <Link href={`/profile/orders/${order._id}`} >details</Link>
             
            </div>
    )
}