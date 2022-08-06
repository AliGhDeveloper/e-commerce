export default function Toast( { title, handleShow, message, bgColor}){

    return (
        <div style={{position: 'fixed', zIndex: 101, right: "0"}} className={`alert show bg-${bgColor}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex justify-content-between">
                <strong className="mr-auto">{ title }</strong>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={handleShow}>
                    <span  className="outlined">x</span>
                </button>
            </div>
            <div className="toast-body">
                { message }
            </div>
        </div>
    )
}