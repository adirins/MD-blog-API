import React, {useEffect} from 'react'
import Article from './article'
import ArticleHome from './articleHome'
import './home.css'



export const Home = () => {
    
    useEffect (() => {
        alert("Welcome to my blog")
    }, [])
    
    return (
        <section>
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>
                            Home Page
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div >
                            <ArticleHome />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    

)

}