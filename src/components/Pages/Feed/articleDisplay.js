import React, { useEffect } from "react";

import { connect } from 'react-redux';
import { fetchArticles, setCurrArticle } from "../../../redux/actions/articleActions";

import $ from 'jquery';

const MessageDisplay = props => {
    useEffect(() => {
       props.fetchArticles(); 
    }, []);

    const articleSelect = (e) => {
        let btn;

        if ($(e.target).parent("button").length === 1)
            btn = $(e.target).parent("button");
        else 
            btn = $(e.target);

        console.log(btn);

        props.setCurrArticle(btn[0].id - 1);
    }
    

    const articleList = props.articles.map(article => {
        return (
            <button key={article.id} id={article.id} onClick={articleSelect} >
                <h3> {article.title} </h3>
                <p> {article.body} </p>
            </button>
        );
    })

    return (
        <div className="col-md-6">
            {articleList} 
        </div>
    );
}

const mapStateToProps = state => ({
    articles: state.articles.items
});


export default connect(mapStateToProps, {fetchArticles, setCurrArticle})(MessageDisplay);
