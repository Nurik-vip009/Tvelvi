import React from 'react';
import FeatureCard from './FeatureCard';

const DesignPage = ({ onPriceChange }) => {
    const features = [
        {
            title: 'Шаблонный дизайн. Стандартный, но профессиональный дизайн, простой адаптивный.',
            price: 30000,
            description: 'Быстро и стильно — ваша среда в минималистичном дизайне!',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Кастомизированный дизайн. Настройка под фирменный стиль заказчика.',
            price: 50000,
            description: 'Отдайте ваш бренд — дизайн, который запоминается клиентам.',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
        },
        {
            title: 'Уникальный дизайн с нуля. Полный дизайн-пакет с разработкой индивидуального стиля.',
            price: 80000,
            description: 'Запомните ваш бренд — уникальный стиль привлечет внимание.',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="page">
            <h2 className="page-title">Дизайн</h2>
            <div className="features-list">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        price={feature.price}
                        description={feature.description}
                        icon={feature.icon}
                        onPriceChange={onPriceChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesignPage;