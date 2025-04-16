import React from 'react';
import FeatureCard from './FeatureCard';
import icon_1 from '../assets/image 79.svg'
const BasicFeaturesPage = ({ onPriceChange }) => {
    const features = [
        {
            title: 'Лёгкий вход для ваших клиентов — повышение конверсии и лояльности.',
            price: 15000,
            description:
                'Регистрация и авторизация. Функция позволяет пользователям регистрироваться и входить через почту, соцсети или номер телефона.',
            image: (
                <img
                    src={icon_1}
                    alt="Лёгкий вход"
                    className="feature-image-img"
                />
            ),
        },
        {
            title: 'Каждый профиль помогает лучше узнать потребности клиента и удивить его.',
            price: 10000,
            description:
                'Профили пользователя. Позволяет пользователям настраивать свои данные, загрузить фото и контактную информацию.',
            image: (
                <img
                    src="https://via.placeholder.com/120x200"
                    alt="Профили пользователя"
                    className="feature-image-img"
                />
            ),
        },
        {
            title: 'Легкий доступ к важной информации — повышает оценку удобства',
            price: 10000,
            description:
                'Навигация и главная страница. Интуитивная система навигации и понятный главный экран с быстрым доступом к основным функциям.',
            image: (
                <img
                    src="https://via.placeholder.com/120x200"
                    alt="Навигация"
                    className="feature-image-img"
                />
            ),
        },
        {
            title: 'Ваши клиенты будут оформлять заказы быстрее и с удобством',
            price: 15000,
            description:
                'Оформление заказов. Позволяет пользователям быстро и удобно оформлять заказы через приложение.',
            image: (
                <img
                    src="https://via.placeholder.com/120x200"
                    alt="Оформление заказов"
                    className="feature-image-img"
                />
            ),
        },
    ];

    return (
        <div className="page">
            <h2 className="page-title">Базовые функции</h2>
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
            <div className="fixed-button-container">
                <button className="action-button">Готово</button>
            </div>
        </div>
    );
};

export default BasicFeaturesPage;