import React from "react";

import Header from "../../Header";
import ArticleDisplay from "./articleDisplay";
import ArticleFocus from "./articleFocus";

const FeedPage = () => {
    return (
        <div>
            <Header />
            <div className="container" >
                <div className="row">
                    <h3> My Feed </h3>
                </div>
                <div className="row" >
                    <div className="col-md-6" >
                        <ArticleDisplay />
                    </div>
                    <div className="col-md-6" >
                        <ArticleFocus />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedPage;
