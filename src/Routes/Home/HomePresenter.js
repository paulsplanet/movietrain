import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../../src/Components/Section";

const Container = styled.div`
    padding: 0px 10px;`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => loading ? null : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 && 
        (<Section title="Now Playing">{nowPlaying.map(movie => movie.title)}</Section>)}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: propTypes.array,
    popular: propTypes.array,
    upcoming: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
}

export default HomePresenter;