import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "flexboxgrid";
import './articleHome.css'

type ArticleData ={
  userid: string,
  id: string
  title: string
  body: string 
}


const ArticleHome = () => {

    const [articleData,setArticleData]=useState<ArticleData[]>([])
    const [loading,setLoading]=useState(true)


    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setArticleData(res.data)
        setLoading(false)
        })

    },[])

    console.log(articleData)
    
    return (
        <section >
            {loading && <h1>loadin'....</h1>}
            <div className="container container-fluid" >   
                {articleData && !loading &&               
                    articleData.map((item) => {
                        return (
                            < div className="row article__box">
                                <div className="col-xs-10">
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                                <div className="col-xs-2">
                                    <h1 >
                                        {item.id}
                                    </h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default ArticleHome