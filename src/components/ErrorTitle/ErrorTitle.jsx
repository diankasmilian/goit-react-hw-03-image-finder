import { ErrorText } from './ErrorTitle.styled';
import PropTypes from 'prop-types';

export const ErrorTitle = ({ message }) => {
  return (
    <div>
      <ErrorText>{message}</ErrorText>
    </div>
  );
};

ErrorTitle.propTypes = {
  error: PropTypes.string.isRequired,
};
