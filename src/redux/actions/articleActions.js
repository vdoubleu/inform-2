import { SET_CURR_ARTICLE, FETCH_ARTICLES, UPDATE_OPINION, FETCH_OPINION } from "./types";

export const fetchArticles = () => dispatch => {
}

export const setCurrArticle = articleIndex => dispatch => {
    dispatch({
        type: SET_CURR_ARTICLE,
        payload: articleIndex
    })
}

export const updateOpinion = newOpinion => dispatch => {

}

export const fetchOpinion = opinionData => dispatch => {
    
}
