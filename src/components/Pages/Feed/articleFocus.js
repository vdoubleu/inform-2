import React from "react";
import { connect } from "react-redux";

const ArticleFocus = props => {
    return (
        <div className="col-md-6">
           <h3> {props.currArticle.title} </h3> 
           <p> {props.currArticle.body} </p> 
        </div>
    );
}

const mapStateToProps = state => ({
    currArticle: state.articles.items.length == 0
        ? {body: "", title: "", id: 0}
        : state.articles.items[state.articles.currentID]
})

export default connect(mapStateToProps)(ArticleFocus);
