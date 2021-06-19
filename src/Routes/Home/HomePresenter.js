import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => null;

HomePresenter.propTypes = {
    nowPlaying: propTypes.array,
    popular: propTypes.array,
    upcoming: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
}

export default HomePresenter;