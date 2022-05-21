import React from 'react'
import logo from "../../assets/icons/logo.png";
import { BASE_URL } from '../../static/variables';
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
    <div className="header__top header-top">
        <div className="content">
            <div className="d-flex justify-content-start align-items-center">
                <a className="header__logo" href={`${BASE_URL}/`} title="Вернуться на главную" aria-label="Вернуться на главную">
                    <img src={logo} alt="Логотип" />
                </a>
                <div className="d-flex justify-content-start align-items-center header-top__links">
                    <a className="header-top__link" href={`${BASE_URL}/delivery/`}>Доставка и оплата</a>
                    <a className="header-top__link" href={`${BASE_URL}/faq/`}>FAQ</a>
                </div>
                <div className="d-flex justify-content-start align-items-center header-top__socials">
                    <a className="header-top__social" href="https://vk.com/alexbooks" target="_blank" rel="nofollow">
                        <svg width="17" height="11" viewBox="0 0 17 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2446 8.14589C15.8748 7.70273 15.4571 7.30705 15.053 6.92438C14.9111 6.78987 14.7642 6.65079 14.6227 6.51269C14.6228 6.51273 14.6227 6.51266 14.6227 6.51269C14.4325 6.32712 14.3392 6.1953 14.3295 6.09802C14.3199 6.00239 14.3853 5.86051 14.5356 5.6508C14.7603 5.33537 14.9999 5.01941 15.2317 4.71387C15.4377 4.44227 15.6506 4.1614 15.8548 3.87894L15.9006 3.81553C16.2989 3.26429 16.7106 2.69429 16.9313 1.99967C16.9943 1.80052 17.0598 1.50581 16.9019 1.24709C16.744 0.988302 16.4513 0.911603 16.2449 0.876474C16.1442 0.859208 16.0485 0.85778 15.9596 0.85778L13.3761 0.855489C12.9295 0.848052 12.6196 1.05976 12.4508 1.48489C12.3156 1.82443 12.156 2.21792 11.9711 2.59119C11.6173 3.3118 11.1678 4.14178 10.5162 4.83331L10.4873 4.86412C10.4429 4.91147 10.3704 4.9889 10.3332 5.00666C10.2626 4.9623 10.1812 4.70859 10.1849 4.57568C10.185 4.57239 10.185 4.56914 10.185 4.56589L10.1827 1.58081C10.1827 1.56564 10.1817 1.55047 10.1796 1.53543C10.1217 1.10956 10.0087 0.682633 9.33471 0.549621C9.31309 0.545338 9.29111 0.543213 9.26913 0.543213H6.58182C6.07624 0.543213 5.80882 0.774739 5.59443 1.02576C5.53237 1.09894 5.36748 1.29324 5.45149 1.53078C5.53649 1.77114 5.78976 1.81911 5.8729 1.83485C6.16575 1.89043 6.31719 2.05595 6.36408 2.37238C6.45675 2.9872 6.4681 3.64493 6.39987 4.44124C6.38084 4.65504 6.34545 4.81753 6.28834 4.95267C6.27254 4.99009 6.25866 5.01327 6.24896 5.02691C6.23349 5.02067 6.20942 5.00872 6.17608 4.98591C5.97029 4.84509 5.81519 4.62618 5.66521 4.41455C5.06616 3.56876 4.56227 2.63462 4.12455 1.55834C3.94429 1.1173 3.60542 0.870962 3.17099 0.864587C2.3433 0.850808 1.57779 0.85114 0.831518 0.86565C0.479531 0.871759 0.232698 0.982558 0.0977598 1.19503C-0.0373442 1.40789 -0.0323969 1.6793 0.112502 2.00183C1.14831 4.30514 2.08883 5.98071 3.16196 7.43481C3.91756 8.45854 4.67818 9.16915 5.55564 9.67119C6.47757 10.1986 7.51729 10.4571 8.7235 10.4571C8.86066 10.4571 9.00022 10.4537 9.14163 10.447C9.88581 10.4131 10.1886 10.1171 10.2216 9.39228C10.2402 9.00921 10.2828 8.69889 10.4307 8.42928C10.4721 8.35381 10.5188 8.30321 10.5556 8.29395C10.5947 8.28419 10.664 8.30813 10.7412 8.35823C10.8822 8.4498 11.0036 8.57398 11.1034 8.68299C11.2046 8.79379 11.3069 8.90824 11.4059 9.01891C11.6165 9.25455 11.8343 9.49823 12.0625 9.73065C12.5785 10.2567 13.1735 10.498 13.8315 10.4474L16.1957 10.4485C16.1957 10.4485 16.1958 10.4485 16.1957 10.4485C16.2032 10.4485 16.2108 10.4483 16.2183 10.4478C16.491 10.4296 16.7268 10.2787 16.8653 10.0335C17.032 9.73826 17.0295 9.36429 16.8584 9.03275C16.6799 8.68807 16.4483 8.3914 16.2446 8.14589ZM16.2755 9.7005C16.2429 9.75824 16.2027 9.76877 16.182 9.77129L13.8182 9.7702C13.8183 9.7702 13.8182 9.7702 13.8182 9.7702C13.8089 9.7702 13.7993 9.77056 13.7901 9.77136C13.3244 9.81014 12.9286 9.64645 12.5458 9.25631C12.3287 9.03511 12.1163 8.79747 11.9108 8.56764C11.9084 8.56496 11.906 8.56227 11.9036 8.55958C11.8058 8.4501 11.7048 8.33707 11.6033 8.22598C11.4743 8.08513 11.3149 7.92327 11.1101 7.79025C10.8034 7.5912 10.5492 7.59721 10.3901 7.63732C10.2326 7.677 10.0088 7.79022 9.83694 8.10379C9.61434 8.5095 9.56524 8.94719 9.54525 9.36067C9.53369 9.61354 9.49093 9.68035 9.47306 9.69732C9.44966 9.71956 9.37143 9.75868 9.11042 9.7706C7.85613 9.82957 6.80352 9.60494 5.89199 9.08342C5.09903 8.62973 4.40469 7.97805 3.70692 7.03272C2.66351 5.61896 1.74544 3.98177 0.730249 1.72429C0.693459 1.64251 0.682104 1.59147 0.678817 1.56415C0.704715 1.55565 0.755317 1.54446 0.844036 1.54283C1.58274 1.52852 2.34024 1.52812 3.16046 1.5418C3.27275 1.54346 3.40062 1.57716 3.49744 1.81407C3.95478 2.93863 4.48308 3.91729 5.11261 4.80608C5.27976 5.04199 5.48781 5.33564 5.79358 5.54485C6.07365 5.73663 6.30092 5.72747 6.4423 5.68603C6.58375 5.64456 6.78005 5.52935 6.91226 5.2163C6.99756 5.01453 7.04913 4.78732 7.07466 4.50024C7.14761 3.64848 7.13466 2.94032 7.03399 2.27237C6.96303 1.79381 6.71593 1.4481 6.32669 1.27156C6.39582 1.23557 6.47371 1.22056 6.58189 1.22056H9.23407C9.38328 1.25403 9.41283 1.29334 9.42296 1.30679C9.46593 1.36393 9.49049 1.4991 9.5055 1.60472L9.50776 4.56227C9.50178 4.84579 9.63958 5.47459 10.1087 5.64702C10.1126 5.64845 10.1165 5.64977 10.1204 5.65103C10.5475 5.79062 10.83 5.4891 10.9817 5.3271L11.0087 5.29835C11.7225 4.54082 12.2031 3.65569 12.5786 2.89085C12.7743 2.4959 12.94 2.08736 13.0802 1.73521C13.1503 1.5586 13.2141 1.52952 13.3664 1.53274C13.3685 1.5328 13.3705 1.5328 13.3727 1.5328L15.9594 1.53509C16.0195 1.53509 16.0823 1.53579 16.131 1.54413C16.2543 1.56511 16.305 1.59068 16.3218 1.60127C16.3235 1.62089 16.3231 1.67734 16.2858 1.79514C16.0982 2.38579 15.7356 2.88763 15.3517 3.41895L15.3059 3.48246C15.108 3.75634 14.899 4.03188 14.6969 4.29854C14.6953 4.3006 14.6937 4.30266 14.6922 4.30471C14.4574 4.6142 14.2148 4.93418 13.9847 5.25711C13.4928 5.94339 13.5361 6.39881 14.1499 6.99753C14.295 7.13914 14.4437 7.27999 14.5875 7.41619L14.5884 7.41701C14.9958 7.80296 15.3807 8.16754 15.7242 8.57916C15.9042 8.79611 16.1082 9.05666 16.2569 9.3438C16.3344 9.49411 16.3154 9.62991 16.2755 9.7005Z"></path>
                            <path d="M16.2755 9.7005C16.2429 9.75824 16.2027 9.76877 16.182 9.77129L13.8182 9.7702C13.8089 9.7702 13.7993 9.77056 13.7901 9.77136C13.3244 9.81014 12.9286 9.64645 12.5458 9.25631C12.3287 9.03511 12.1163 8.79747 11.9108 8.56764L11.9036 8.55958C11.8058 8.4501 11.7048 8.33707 11.6033 8.22598C11.4743 8.08513 11.3149 7.92327 11.1101 7.79025C10.8034 7.5912 10.5492 7.59721 10.3901 7.63732C10.2326 7.677 10.0088 7.79022 9.83694 8.10379C9.61434 8.5095 9.56524 8.94719 9.54525 9.36067C9.53369 9.61354 9.49093 9.68035 9.47306 9.69732C9.44966 9.71956 9.37143 9.75868 9.11042 9.7706C7.85613 9.82957 6.80352 9.60494 5.89199 9.08342C5.09903 8.62973 4.40469 7.97805 3.70692 7.03272C2.66351 5.61896 1.74544 3.98177 0.730249 1.72429C0.693459 1.64251 0.682104 1.59147 0.678817 1.56415C0.704715 1.55565 0.755317 1.54446 0.844036 1.54283C1.58274 1.52852 2.34024 1.52812 3.16046 1.5418C3.27275 1.54346 3.40062 1.57716 3.49744 1.81407C3.95478 2.93863 4.48308 3.91729 5.11261 4.80608C5.27976 5.04199 5.48781 5.33564 5.79358 5.54485C6.07365 5.73663 6.30092 5.72747 6.4423 5.68603C6.58375 5.64456 6.78005 5.52935 6.91226 5.2163C6.99756 5.01453 7.04913 4.78732 7.07466 4.50024C7.14761 3.64848 7.13466 2.94032 7.03399 2.27237C6.96303 1.79381 6.71593 1.4481 6.32669 1.27156C6.39582 1.23557 6.47371 1.22056 6.58189 1.22056H9.23407C9.38328 1.25403 9.41283 1.29334 9.42296 1.30679C9.46593 1.36393 9.49049 1.4991 9.5055 1.60472L9.50776 4.56227C9.50178 4.84579 9.63958 5.47459 10.1087 5.64702C10.1126 5.64845 10.1165 5.64977 10.1204 5.65103C10.5475 5.79062 10.83 5.4891 10.9817 5.3271L11.0087 5.29835C11.7225 4.54082 12.2031 3.65569 12.5786 2.89085C12.7743 2.4959 12.94 2.08736 13.0802 1.73521C13.1503 1.5586 13.2141 1.52952 13.3664 1.53274L13.3727 1.5328L15.9594 1.53509C16.0195 1.53509 16.0823 1.53579 16.131 1.54413C16.2543 1.56511 16.305 1.59068 16.3218 1.60127C16.3235 1.62089 16.3231 1.67734 16.2858 1.79514C16.0982 2.38579 15.7356 2.88763 15.3517 3.41895L15.3059 3.48246C15.108 3.75634 14.899 4.03188 14.6969 4.29854L14.6922 4.30471C14.4574 4.6142 14.2148 4.93418 13.9847 5.25711C13.4928 5.94339 13.5361 6.39881 14.1499 6.99753C14.295 7.13914 14.4437 7.27999 14.5875 7.41619L14.5884 7.41701C14.9958 7.80296 15.3807 8.16754 15.7242 8.57916C15.9042 8.79611 16.1082 9.05666 16.2569 9.3438C16.3344 9.49411 16.3154 9.62991 16.2755 9.7005Z"></path>
                        </svg>
                    </a>
                    <a className="header-top__social" href="https://www.instagram.com/alexbooks.pro/" rel="nofollow" target="_blank">
                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2103 0H3.78967C1.70001 0 0 1.70001 0 3.78967V10.2104C0 12.3 1.70001 14 3.78967 14H10.2104C12.3 14 14 12.3 14 10.2104V3.78967C14 1.70001 12.3 0 10.2103 0V0ZM13.1792 10.2104C13.1792 11.8474 11.8474 13.1792 10.2103 13.1792H3.78967C2.15257 13.1792 0.820738 11.8474 0.820738 10.2104V3.78967C0.820738 2.15257 2.15257 0.820738 3.78967 0.820738H10.2104C11.8474 0.820738 13.1792 2.15257 13.1792 3.78967V10.2104Z"></path>
                            <path d="M7.00007 3.17212C4.88926 3.17212 3.17206 4.88932 3.17206 7.00013C3.17206 9.11093 4.88926 10.8281 7.00007 10.8281C9.11087 10.8281 10.8281 9.11093 10.8281 7.00013C10.8281 4.88932 9.11087 3.17212 7.00007 3.17212ZM7.00007 10.0074C5.34193 10.0074 3.9928 8.65838 3.9928 7.00013C3.9928 5.34199 5.34193 3.99286 7.00007 3.99286C8.65831 3.99286 10.0073 5.34199 10.0073 7.00013C10.0073 8.65838 8.65831 10.0074 7.00007 10.0074Z"></path>
                            <path d="M10.9195 1.8125C10.2957 1.8125 9.78839 2.31996 9.78839 2.94363C9.78839 3.56741 10.2957 4.07487 10.9195 4.07487C11.5433 4.07487 12.0508 3.56741 12.0508 2.94363C12.0508 2.31985 11.5433 1.8125 10.9195 1.8125ZM10.9195 3.25403C10.7484 3.25403 10.6091 3.11474 10.6091 2.94363C10.6091 2.77241 10.7484 2.63324 10.9195 2.63324C11.0907 2.63324 11.23 2.77241 11.23 2.94363C11.23 3.11474 11.0907 3.25403 10.9195 3.25403Z"></path>
                        </svg>
                    </a>
                </div>

								<a className="header-top__phone" href="tel:89033012099">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.0372 7.87668C10.3025 7.87668 9.58113 7.76178 8.89753 7.53587C8.56256 7.42162 8.15078 7.52643 7.94634 7.7364L6.59705 8.75497C5.03226 7.91968 4.06837 6.95611 3.24449 5.40307L4.23309 4.08894C4.48994 3.83243 4.58206 3.45774 4.47169 3.10618C4.24481 2.41899 4.12956 1.69795 4.12956 0.962944C4.12959 0.431972 3.69762 0 3.16668 0H0.962913C0.431972 0 0 0.431972 0 0.962913C0 7.04889 4.95122 12.0001 11.0372 12.0001C11.5681 12.0001 12.0001 11.5681 12.0001 11.0372V8.83956C12.0001 8.30865 11.5681 7.87668 11.0372 7.87668Z" fill="#464646"></path>
										</svg>
                                        
                                        <span>+7 (903) 301-20-99</span>
								</a>

                <a className="header-top__create" href={`${BASE_URL}/constructor/`}>Создать фотокнигу</a>
                <a className="header-top__callback" href={`${BASE_URL}`}>Заказать звонок</a>
            </div>
        </div>
    </div>
    <div className="header__bottom">
        <div className="content">
            <div className="d-flex justify-content-start align-items-center">
                <nav className="header-menu">
                    <ul>
                        <li className="header-menu__item">
                            <a href={`${BASE_URL}/`}>Главная</a>
                        </li>

                        <li className="header-menu__item">
                            <a href={`${BASE_URL}/gallery`}>Фотокниги</a>
                            
                        </li>

                        <li className="header-menu__item">
                            <a href={`${BASE_URL}/pechat-fotografiy`}>Печать фотографий</a>
                        </li>

                        <li className="header-menu__item">
                            <a href={`${BASE_URL}/gift`}>Подарочный сертификат</a>
                        </li>

                        <li className="header-menu__item">
                            <a href={`${BASE_URL}/about`}>О нас</a>
                        </li>

                        <li className="header-menu__item">
                            <a href={`${BASE_URL}/contacts`}>Контакты</a>
                        </li>
                    </ul>
                </nav>

                <a className="header__basket" href={`${BASE_URL}/basket`}>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.43278 2.90003H9.48472L7.92529 0.225479C7.79965 0.00875646 7.52126 -0.0651262 7.30447 0.0629371C7.08768 0.188538 7.01377 0.466829 7.14188 0.683551L8.43278 2.90003Z" fill="#4C4C4C"></path>
                        <path d="M4.86305 0.683677C4.98869 0.466955 4.91725 0.188664 4.70045 0.0630632C4.48366 -0.0625373 4.20528 0.00888262 4.07964 0.225605L2.5202 2.90262H3.57214L4.86305 0.683677Z" fill="#4C4C4C"></path>
                        <path d="M11.2264 3.71997H0.771094C0.344898 3.71997 0 4.06476 0 4.49081V5.34539C0 5.77145 0.344898 6.11623 0.771094 6.11623H1.01252L1.75652 10.1478C1.85013 10.6231 2.28372 10.9999 2.73455 10.9999H3.03018H4.97146C5.16855 10.9999 5.42476 10.9999 5.6859 10.9999H5.9224H6.1589C6.42004 10.9999 6.67625 10.9999 6.87333 10.9999H8.81462H9.11024C9.56108 10.9999 9.99466 10.6231 10.0883 10.1478L10.8372 6.11377H11.2289C11.6551 6.11377 12 5.76898 12 5.34293V4.48835C11.9975 4.06476 11.6526 3.71997 11.2264 3.71997ZM4.25703 7.74904V9.48774C4.25703 9.73648 4.05502 9.92365 3.82098 9.92365C3.57216 9.92365 3.38493 9.7217 3.38493 9.48774V8.75877V7.04962C3.38493 6.80088 3.58694 6.61371 3.82098 6.61371C4.0698 6.61371 4.25703 6.81565 4.25703 7.04962V7.74904ZM5.65633 7.74904V9.48774C5.65633 9.73648 5.45432 9.92365 5.22028 9.92365C4.97146 9.92365 4.78423 9.7217 4.78423 9.48774V8.75877V7.04962C4.78423 6.80088 4.98624 6.61371 5.22028 6.61371C5.45432 6.61371 5.65633 6.81565 5.65633 7.04962V7.74904ZM7.06303 8.75877V9.48774C7.06303 9.7217 6.8758 9.92365 6.62698 9.92365C6.39294 9.92365 6.19093 9.73648 6.19093 9.48774V7.74904V7.04962C6.19093 6.81565 6.39294 6.61371 6.62698 6.61371C6.86101 6.61371 7.06303 6.80088 7.06303 7.04962V8.75877ZM8.46233 8.75877V9.48774C8.46233 9.7217 8.2751 9.92365 8.02628 9.92365C7.79224 9.92365 7.59023 9.73648 7.59023 9.48774V7.74904V7.04962C7.59023 6.81565 7.77746 6.61371 8.02628 6.61371C8.26032 6.61371 8.46233 6.80088 8.46233 7.04962V8.75877Z" fill="#4C4C4C"></path>
                    </svg>
                    Корзина
                </a>

               
            </div>
        </div>
    </div>
</header>
  )
}

export default Header