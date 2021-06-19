import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({ movieResults, tvResults, searchTerm, handleSubmit, loading, error }) => null;

SearchPresenter.propTypes = {
    movieResults: propTypes.array,
    tvResults: propTypes.array,
    searchTerm: propTypes.string,
    handleSubmit: propTypes.func.isRequired,
    loading:propTypes.bool.isRequired,
    error:propTypes.string,
}

export default SearchPresenter;