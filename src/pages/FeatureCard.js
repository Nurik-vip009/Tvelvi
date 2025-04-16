import React, { useState } from 'react';

const FeatureCard = ({ title, price, description, image, onPriceChange }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        setIsSelected(!isSelected);
        if (typeof onPriceChange === 'function') {
            onPriceChange(isSelected ? -price : price);
        } else {
            console.warn('onPriceChange is not a function');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleToggle();
        }
    };

    return (
        <div
            className="feature-card"
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={0}
        >
            <div className="feature-content">
                <div className="feature-text">
                    <div className="feature-price-top">
                        ОТ {(price || 0).toLocaleString()} ₽
                    </div>
                    <h3 className="feature-title">{title}</h3>
                    <p className="feature-description">{description}</p>
                </div>
                <div className="feature-image">{image || <div className="placeholder-image">No Image</div>}</div>
            </div>
            {isSelected && (
                <div className="feature-check">
                    <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default FeatureCard;