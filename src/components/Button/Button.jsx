import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export const LoadMore = ({ handleLoadMore }) => {
  return (
    <LoadMoreButton type="button" onClick={() => handleLoadMore()}>
      Load More
    </LoadMoreButton>
  );
};

LoadMore.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
