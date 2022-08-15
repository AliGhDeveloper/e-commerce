import filtering from "utils/filtering";
export default function Pagination({ page, setPage, more}) {
    const handlePagination = (e, option) => {
        if(option.direc === 'next'){
          filtering({router, page: page + 1});
          setPage(page + 1)
        } else {
          if(page > 1){
            setPage(page - 1)
            filtering({router, page: page - 1});
          } 
        }
    };
    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-end mx-3">
            <ul className="pagination d-flex flex-row-reverse">
                <li className={`page-item ${page === 1 && 'disabled'}`}><a className="page-link" href="#" onClick={(e) => handlePagination(e, { direc : 'prev' })}>Previous</a></li>
                <li className="page-item"><a className="page-link" href="#" >{page}</a></li>
                <li className={`page-item ${!more && 'disabled'}`}><a  className="page-link" href="#" onClick={(e) => handlePagination(e, { direc : 'next' })} >Next</a></li>
            </ul>
        </nav>
    )
}