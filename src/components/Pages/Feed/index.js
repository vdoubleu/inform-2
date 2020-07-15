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
                    <ArticleDisplay />
                    <ArticleFocus />
                </div>
            </div>
        </div>
    );
}

export default FeedPage;
