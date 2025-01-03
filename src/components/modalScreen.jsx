import React from 'react';
import './ModalScreen.css';

const ModalScreen = ({ isOpen, onClose, onConfirm }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-inside">
                    <h2>Вы действительно хотите отключить аккаунт?</h2>
                    <p>Для его восстановления нужно будет снова совершить авторизацию.</p>
                    <div className="modal-button-container">
                        <button className="modal-cancel-button" onClick={onClose}>Отмена</button>
                        <button className="modal-confirm-button" onClick={onConfirm}>Отключить</button>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default ModalScreen;