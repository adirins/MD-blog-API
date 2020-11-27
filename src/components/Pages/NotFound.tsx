import React from 'react'



export const NotFound = ({currentURL}: any) => {
    

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>
                            {currentURL}  NotFound
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    

)

}