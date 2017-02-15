import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Search from 'grommet/components/Search';
import Title from 'grommet/components/Title';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchMoviesContainerActionCreators from './actions';
// import { StyledWrapper } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class SearchMoviesContainer extends Component {
  render() {
    return (
      <Box>
        <Header>
          <Title>Movie Title</Title>
          <Search />
        </Header>
      </Box>
    );
  }
}

SearchMoviesContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.searchMovies.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    SearchMoviesContainerActionCreators,
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMoviesContainer);
