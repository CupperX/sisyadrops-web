import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MainScreen.css';

import multiConnectIcon from './assets/multiconnect-icon.svg';
import levelIcon from './assets/level-icon.svg';
import questionIcon from './assets/question-mark.svg';
import supportIcon from './assets/support-icon.svg';
import becamePartnerIcon from './assets/becamepartner-icon.svg';
import settingsMenuArrowIcon from './assets/settings-menu-arrow.svg';


const MainScreen = () => {
    const navigate = useNavigate();
    const [readStories, setReadStories] = useState({});
        const { t } = useTranslation();

    const account_date = '12 Aug';
    const account_time = '13:25';

    useEffect(() => {
        document.title = t('tab_title');
    }, [t]);

    const stories = [
        {
            id: 'story-startdrops-stalcraft0',
            imgSrc: 'https://i.imgur.com/ZqkrUJb.png',
            alt: 'alt-startdrops-stalcraft0',
            stories: [
                {
                    url: 'https://i.imgur.com/qwB8mVr.png',
                    type: 'image'
                },
            ],
        },
        {
            id: 'story-startdrops-rust0',
            imgSrc: 'https://i.imgur.com/ZqkrUJb.png',
            alt: 'alt-startdrops-rust0',
            stories: [
                {
                    url: 'https://i.imgur.com/qwB8mVr.png',
                    type: 'image'
                },
            ],
        },
        {
            id: 'story-startdrops-rust3',
            imgSrc: 'https://i.imgur.com/ZqkrUJb.png',
            alt: 'alt-startdrops-rust0',
            stories: [
                {
                    url: 'https://i.imgur.com/qwB8mVr.png',
                    type: 'image'
                },
            ],
        },
        {
            id: 'story-startdrops-rust2',
            imgSrc: 'https://i.imgur.com/ZqkrUJb.png',
            alt: 'alt-startdrops-rust0',
            stories: [
                {
                    url: 'https://i.imgur.com/qwB8mVr.png',
                    type: 'image'
                },
            ],
        }
    ];

    useEffect(() => {
        // Загрузить состояние прочитанных историй из localStorage при монтировании компонента
        const savedReadStories = JSON.parse(localStorage.getItem('readStories')) || {};
        setReadStories(savedReadStories);
    }, []);

    const handleStoryOpen = (id, stories) => {
        // Обновить состояние прочитанных историй
        setReadStories((prevReadStories) => {
            const newReadStories = { ...prevReadStories, [id]: true };
            localStorage.setItem('readStories', JSON.stringify(newReadStories)); // Сохранить состояние в localStorage
            return newReadStories;
        });
        navigate('/stories', { state: { stories } });
    };

    const handleMenuButtonClick = (settingName) => {
        console.log(`Clicked on ${settingName}`);
    };

    const handleConnectButtonClick = (connectScreen) => {
        console.log(`Connecting`);
        /*navigate('/connectScreen', { state: { connectScreen } });*/
        navigate("/techScreen", { state:4});

    };

    return (
        <div className="main-screen">

            {/* Истории */}
            <div className="stories-segment">
                <h2 className="stories-header">{t('stories_header')}</h2>
                <div className="stories-scroll-box">
                    {stories.map((button) => (
                        <button
                            key={button.id}
                            className={`stories-button ${readStories[button.id] ? '' : 'not-read'}`}
                            onClick={() => handleStoryOpen(button.id, button.stories)}
                        >
                            <img src={button.imgSrc} alt={button.alt} className="stories-button-image" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="divider"></div>

            {/* Главное меню */}
            <div className="mainmenu-segment">
                <button className="connect-button" onClick={() => handleConnectButtonClick()}>{t('connect_button')}</button>
                <div className="secondary-buttons-box">
                    <button className="secondary-button">
                        <img src={multiConnectIcon} alt="Multi Connect Icon" className="button-icon"/>
                        <span>{t('multiconnect_button')}</span>
                    </button>

                    <button className="secondary-button">
                        <img src={levelIcon} alt="Diamond Icon" className="button-icon"/>
                        <span>{t('level_button')}</span>
                    </button>
                </div>
            </div>

            <div className="divider"></div>

            {/* Новый блок с меню-кнопками */}
            <div className="settings-buttons-segment">
                <button className="settings-button" onClick={() => handleMenuButtonClick('Menu 1')}>
                    <div className="settings-button-content">
                        <div className="settings-faq-icon">
                            <img src={questionIcon} alt="Question Mark Icon" className="settings-faq-icon-img"/>
                        </div>
                        <span className="settings-button-text">{t('faq_button')}</span>
                    </div>

                    <div className="settings-menu-arrow">
                        <img src={settingsMenuArrowIcon} alt="Settings Menu Arrow" className="settings-arrow-img"/>
                    </div>
                </button>

                <div className="button-divider"></div>

                <button className="settings-button" onClick={() => handleMenuButtonClick('Menu 2')}>
                    <div className="settings-button-content">
                        <div className="settings-support-icon">
                            <img src={supportIcon} alt="Question Mark" className="settings-icon-img"/>
                        </div>
                        <span className="settings-button-text">{t('support_button')}</span>
                    </div>

                    <div className="settings-menu-arrow">
                        <img src={settingsMenuArrowIcon} alt="Settings Menu Arrow" className="settings-arrow-img"/>
                    </div>
                </button>

                <div className="button-divider"></div>

                <button className="settings-button" onClick={() => handleMenuButtonClick('Menu 3')}>
                    <div className="settings-button-content">
                        <div className="settings-partner-icon">
                            <img src={becamePartnerIcon} alt="Money Bag Icon" className="settings-icon-img"/>
                        </div>
                        <span className="settings-button-text">{t('become_partner_button')}</span>
                    </div>

                    <div className="settings-menu-arrow">
                        <img src={settingsMenuArrowIcon} alt="Settings Menu Arrow" className="settings-arrow-img"/>
                    </div>
                </button>


            </div>

            <div className="divider"></div>

            {/* Блок с подключенными аккаунтами */}
            <div className="accounts-segment">
                <h2 className="accounts-segment-title">Подключенные аккаунты</h2>
                <button className="account-box">
                    <div className="account-info">
                        <div className="account-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="12"/>
                            </svg>
                        </div>
                        <div className="account-text">
                            <div className="account-name">{t('empty_accounts_list')}</div>
                            <div className="account-mode">{t('empty_accounts_list_description')}</div>
                        </div>
                    </div>
                    <div className="account-date-box">
                        <div className="account-date">{account_date}</div>
                        <div className="account-time">{account_time}</div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default MainScreen;