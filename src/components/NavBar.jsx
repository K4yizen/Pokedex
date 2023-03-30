import React from "react";
import PropTypes from "prop-types";

function NavBar({ onPrevious, onNext, hasPrevious, hasNext }) {
  return (
    <div>
      {hasPrevious && <button onClick={onPrevious}>Précédent</button>}
      {hasNext && <button onClick={onNext}>Suivant</button>}
    </div>
  );
}

NavBar.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
};

export default NavBar;
