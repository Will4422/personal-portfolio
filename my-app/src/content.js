import React from "react";
import headshot from "/Users/willoxtoby/Documents/GitHub/personal-portfolio/my-app/src/imgs/headshot.jpg"
import "/Users/willoxtoby/Documents/GitHub/personal-portfolio/my-app/src/styles/content.css"

const Content = () => {
    return (
        <div>
            <div className="container">
                <div className="item grid-item-1">
                    <div className="name">
                        <h1>Will Oxtoby</h1>
                    </div>
                </div>
                <div className="item grid-item-2">
                    <h2>Who am I?</h2>
                </div>
                <div className="item grid-item-3">
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>     
                </div>
                <div className="item grid-item-4">
                    <img src={headshot} className="headshot"/>
                </div>
                <div className="item grid-item-5">
                    <h2>My Interests</h2>
                </div>
                <div className="item grid-item-6">
                    <img src={headshot} className="other-img"/>
                </div>
                <div className="item grid-item-7">
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>    
                </div>
            </div>    
        </div>  
            
        //     
        //         <div className="parent">
        //         <div className="img-child" id="other-img-div">
        //                  
        //         </div>
        //         <div className="text-child">
        //             
        //         </div>
        //     </div>
        // </div>
    );
}

export default Content;