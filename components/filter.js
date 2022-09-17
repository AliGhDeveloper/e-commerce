import filtering from "utils/filtering"
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

export default function Filter({ categories }){
    const router = useRouter();
    const [ category, setCategory ] = useState(router.query.category || '');
    const [ search, setSearch ] = useState('');
    

    useEffect(() => {
            filtering({router, search: search ? search.toLowerCase() : 'all'})
    }, [search])

    const handleCategory = (e) => {
        setCategory(e.target.value);
        filtering({router, category: e.target.value})
    };
    return (
        <div className="filter my-2 row">
            <div className="col-sm-3">
                <div className="input-group">
                    <div className="input-group-prepend" >
                        <span className="input-group-text">categroy</span>
                    </div>
                    <select value={category} className="custom-select" onChange={handleCategory}>
                        <option value="all">All Products</option>
                        {
                            categories.map(cat => (
                                <option key={cat._id} value={cat._id} >{cat.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="col-sm-6">
                <input type="text" placeholder="search..." name="title" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="col-sm-3">
                <select className="form-control" onChange={(e) => {filtering({router, sort: e.target.value})}}>
                    <option value="-createdAt">newest</option>
                    <option value="oldest">oldest</option>
                    <option value="-sold">best sell</option>
                    <option value="price">price low-high</option>
                    <option value="-price">price high-low</option>
                </select>  
            </div>
        </div>
    )
};

