import React from 'react';
import FeatureCard from './FeatureCard';
import './DesighPage.css'
import icon_1 from '../assets/Remove-bg.ai_1731875233067 1.svg'
import icon_2 from '../assets/Remove-bg.ai_1731887506469 1.svg'
import icon_3 from '../assets/Remove-bg.ai_1731888462468 1.svg'
const DesignPage = ({ onPriceChange }) => {
    const features = [
        {
            title: 'Шаблонный дизайн. Стандартный, но профессиональный дизайн, простой адаптивный.',
            price: 30000,
            description: 'Быстро и стильно — ваша среда в минималистичном дизайне!',
            image: (
                <img
                    src={icon_1}
                    alt="Лёгкий вход"
                    className="feature-image-img"
                />
            ),
        },
        {
            title: 'Кастомизированный дизайн. Настройка под фирменный стиль заказчика.',
            price: 50000,
            description: 'Отдайте ваш бренд — дизайн, который запоминается клиентам.',
            image: (
                <img
                    src={icon_2}
                    alt="Лёгкий вход"
                    className="feature-image-img"
                />
            ),
        },
        {
            title: 'Уникальный дизайн с нуля. Полный дизайн-пакет с разработкой индивидуального стиля.',
            price: 80000,
            description: 'Запомните ваш бренд — уникальный стиль привлечет внимание.',
            image: (
                <img
                    src={icon_3}
                    alt="Лёгкий вход"
                    className="feature-image-img"
                />
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
                        image={feature.image}
                        onPriceChange={onPriceChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesignPage;