import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, } from 'react-router-dom'

type ArticleData ={
    userid: string;
    id: string;
    title: string;
    body: string;
}



export const FullArticle = () => {
    
    

    const [articleData,setArticleData]=useState <ArticleData[]>([])
    const [comment,setComment]=useState('')
    const [commentArray, setCommentArray] = useState<string[]>([])
    console.log(commentArray)
    
    const addComment = () => {
        setCommentArray([...commentArray,  comment])
        setComment('')
    }

    useEffect(() => {        
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setArticleData(res.data)
                })
    }, [])
    
    const { id }: any = useParams()
    


  
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        {articleData.filter(item => (item.id).toString() === id).map(item =>(
                            <div key={item.id}>
                                <h1>
                                    {item.title}
                                </h1>
                                <p>
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        
                        <input
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            // onKeyDown={(e) => { (e.key === 'Enter') ? (addComment())}
                        />  
                         <button onClick={() => addComment()}>Komentēt</button>
                    </div>
                </div>
                
                    {commentArray.map((item, i) => {
                        return (
                            
                            <div key={i} className="dasKomment">
                                <div className="row">
                                Komentārs {i}: {item}
                                    
                                </div>
                            </div>
                        
                    )})}
                
            </div>
        </section>
    )
}