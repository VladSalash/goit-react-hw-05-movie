import PropTypes from 'prop-types';

import { HiArrowLeft } from 'react-icons/hi';

import { Back } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <Back to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Back>
  );
};

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackLink;
