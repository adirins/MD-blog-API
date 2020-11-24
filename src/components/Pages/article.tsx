import React, {useState} from 'react'
import { useParams  } from "react-router-dom";
import { articlesData} from '../data/articlesData'


const Article = () => {

    let { id } = useParams<{id: string}>();
    const article = articlesData.find((item) => {
        return item.id === id
    })
    

    return (
        <section >
            <div className="container container-fluid" >
                <div className="row">
                    <div className="col-xs-12">
                        <h1 >
                            {article?.title}
                        </h1>
                        <p>
                            {article?.text}
                        </p>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <input type="text" placeholder=" tavs komentārs" id="comment" style={ {width:500, height:50}}/>
                        <label htmlFor="comment"></label>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Article