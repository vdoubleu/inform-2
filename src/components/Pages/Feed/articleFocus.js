import React from "react";
import { connect } from "react-redux";

import "../../../styles/components/Pages/feed.css";

const ArticleFocus = props => {
    return (
        <div className="feed-focus-back">
           <h3 className="feed-focus-text" > {props.currArticle.title} </h3> 
           <p className="feed-focus-text" > {props.currArticle.body} </p> 
        </div>
    );
}

const mapStateToProps = state => ({
    currArticle: state.articles.items.length == 0
        ? {body: "", title: "", id: 0}
        : state.articles.items[state.articles.currentID]
})

export default connect(mapStateToProps)(ArticleFocus);
