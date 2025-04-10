import React, { useState } from 'react';
import InputMask from 'react-input-mask-next';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    // 1. Состояние для номера телефона
    const [phone, setPhone] = useState('');

    // 2. Навигация между страницами
    const navigate = useNavigate();

    // 3. Проверка на заполненность номера
    const isComplete = phone.replace(/[^0-9]/g, '').length === 11;

    // 4. Функция перехода
    const handleClick = () => {
        if (isComplete) {
            navigate('/next'); // Убедись, что маршрут /next существует
        }
    };

    // 5. Отображение на экране
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
            <label className="text-lg font-medium mb-2 self-start">Номер телефона</label>

            <InputMask
                mask="+7 (999) 999 99 99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            >
                {(inputProps) => (
                    <input
                        {...inputProps}
                        type="tel"
                        className="w-full border border-gray-300 rounded-xl p-3 text-lg focus:outline-none focus:border-purple-500"
                        placeholder="+7 (___) ___ __ __"
                    />
                )}
            </InputMask>

            <button
                className={`mt-6 w-full py-3 rounded-xl text-white text-lg font-semibold transition 
          ${isComplete ? 'bg-purple-600' : 'bg-gray-300 cursor-not-allowed'}`}
                disabled={!isComplete}
                onClick={handleClick}
            >
                Продолжить
            </button>
        </div>
    );
}
