import React from 'react';
import FeatureCard from './FeatureCard';

const AdditionalFeaturesPage = ({ onPriceChange }) => {
    const features = [
        {
            title: 'Удерживайте клиентов с помощью напоминаний — они будут возвращаться к вам!',
            price: 15000,
            description:
                'Удерживайте клиентов с помощью напоминаний — они будут возвращаться к вам!',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            ),
        },
        {
            title: 'Повышаает user experience',
            price: 10000,
            description: 'Поиск по каталогу',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            title: 'Упомяните клиентов получить ответ — это повышает лояльность',
            price: 12000,
            description: 'Отзывы и рейтинг',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
            ),
        },
        {
            title: 'Отслеживание курьеров — повышает уверенность клиентов и удобство',
            price: 20000,
            description: 'Геолокация и отслеживание. Отслеживание местоположения курьеров в реальном времени.',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: 'Сделайте оплату легкой и удобной — клиенты оценят удобство',
            price: 30000,
            description: 'Интеграция с платежными системами. Поддержка оплаты через банковские карты, электронные кошельки.',
            icon: (
                <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="page">
            <h2 className="page-title">Дополнительные функции</h2>
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

export default AdditionalFeaturesPage;