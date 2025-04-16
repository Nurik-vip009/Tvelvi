import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinalPricePage = ({ totalPrice = 0 }) => {
    const navigate = useNavigate();

    return (
        <div className="page">
            <h2 className="page-title">Финальная стоимость</h2>
            <div className="final-price-container">
                <p className="final-price-text">
                    Итоговая стоимость вашего проекта:
                </p>
                <p className="final-price-amount">
                    {(totalPrice || 0).toLocaleString()} ₽
                </p>
                <button
                    className="action-button final-price-button"
                    onClick={() => navigate('')}
                >
                    Перейти к оплате
                </button>
            </div>
        </div>
    );
};

export default FinalPricePage;