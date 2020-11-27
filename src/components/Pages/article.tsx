import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "flexboxgrid";

export type ArticleData ={
    userid: string;
    id: string;
    title: string;
    body: string;
}


const Article = () => {


    const [loading, setLoading] = useState(true)
    const [articleData,setArticleData]=useState<ArticleData[]>([])
   
    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setArticleData(res.data)
        setLoading(false)
        })

    },[])

    
    return (
        <section >
            {loading && <h1>loadin'....</h1>}
            <div className="container article__wrapper" >   
                {articleData && !loading &&               
                    articleData.map(({title, id}) => {
                        return (
                            
                            < div
                                key={id}
                                className="row article__box"
                                >
                                <div className="col-xs-10">
                                    <p>
                                        {title}
                                    </p>
                                    
                                    <div  className="row center-xs">
                                        <Link to={`/article/${id}`}>view more</Link>
                                    </div>                                    
                                </div>
                                <div className="col-xs-2 ">
                                    <h2 >
                                        {id}
                                    </h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Article