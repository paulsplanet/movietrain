import React from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    stat = {
        movieResult: null,
        tvResult: null,
        searchTerm: "",
        error: null,
        loading: false,
    };


    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.searchTerm(searchTerm);
        }
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        try{
            const { data: { results: movieResults } } = await moviesApi.search(searchTerm);
            const { data: { results: tvResults } } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults,
            });
            this.setState({ loading: true });
        } catch{
            this.setState({ error: "Can't find results." });
        } finally{
            this.setState({ loading: false });
        }
    };

    render() {
        const { movieResult, tvResult, searchTerm, error, loading } = this.state;
        console.log("hello")
        return (
        <SearchPresenter 
            movieResult={movieResult} 
            tvResult={tvResult} 
            searchTerm={searchTerm} 
            error={error} 
            loading={loading}
            handleSubmit={this.handleSubmit}
        />
    );}
}