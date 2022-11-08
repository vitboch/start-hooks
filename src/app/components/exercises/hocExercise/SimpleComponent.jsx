import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={isAuth ? onLogout : onLogin}
            >
                {isAuth ? "Выйти из системы" : "Войти"}
            </button>
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    isAuth: PropTypes.string
};

export default SimpleComponent;
