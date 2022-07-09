import { useState } from 'react';
import cx from 'classnames';

import css from '../styles/Product.module.scss';

import Carousel from './common/Carousel';
import Popup from './common/Popup';

import { mockCarouselData } from '../mocks/mockCarouselData';

const Product = ({ product }: any) => {
    let { name, brand, model, color, battery, colorAvailable, displayFrashrate, displayResolution, displaySize, displayType, images, labels, os, price, processor, ram, rom, rate, romAvailable } = product[0];
    let npDisplayTimeout: ReturnType<typeof setTimeout>;
    let upDisplayTimeout: ReturnType<typeof setTimeout>;

    const [npDisplay, setNpDisplay] = useState(false);
    const [upDisplay, setUpDisplay] = useState(false);

    const handleNpDisplayMouseLeave = () => {
        npDisplayTimeout = setTimeout(() => { setNpDisplay(false) }, 200);
    }

    const handleNpDisplayMouseEnter = () => {
        setNpDisplay(true);
        clearTimeout(npDisplayTimeout);
    }

    const handleUpDisplayMouseLeave = () => {
        upDisplayTimeout = setTimeout(() => { setUpDisplay(false) }, 200);
    }

    const handleUpDisplayMouseEnter = () => {
        setUpDisplay(true);
        clearTimeout(upDisplayTimeout);
    }

    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.tabs}>
                <a className={css.tabItem} href="#">ВСЕ О ТОВАРЕ</a>
                <a className={css.tabItem} href="#">ХАРАКТЕРИСТИКИ</a>
                <a className={css.tabItem} href="#">ОТЗЫВЫ</a>
                <a className={css.tabItem} href="#">ВОПРОСЫ</a>
                <a className={css.tabItem} href="#">ВИДЕО</a>
                <a className={css.tabItem} href="#">АКСЕССУАРЫ</a>
                <a className={css.tabItem} href="#">СЕРВИСЫ</a>
            </div>
            <div className={css.general}>
                <div className={css.gallery}>
                    <div className={css.list}>
                        {images.map((img: string) => (
                            <img className={css.listItem} src={img} alt="product images" width="52px" height="52px" />
                        ))}
                    </div>
                    <div className={css.mainImage}>
                        <img className={css.listItem} src={images[0]} alt="main image" width="100%" height="380px" />
                    </div>
                </div>
                <div className={css.info}>
                    <div className={css.infoMain}>
                        <h1 className={css.name}>Смартфон {name} {rom}Gb {color}</h1>
                        <div className={css.block}>
                            <div className={css.labels}>
                                <div className={css.label} onMouseEnter={handleNpDisplayMouseEnter} onMouseLeave={handleNpDisplayMouseLeave}>
                                    <img className={css.labelImg} src="https://cdn.comfy.ua/media/label/Group%20965%20(19)_1.svg" alt="Arrow" width="24px" height="24px" />
                                    <span>Доставка Новою Поштою</span>
                                    <Popup type="normal" display={npDisplay} title="Доставка Новой Почтой" text="От 99$ к отделению" button="Подробнее" />
                                </div>
                                <div className={css.label} onMouseEnter={handleUpDisplayMouseEnter} onMouseLeave={handleUpDisplayMouseLeave}>
                                    <img className={css.labelImg} src="https://cdn.comfy.ua/media/label/Group%20967_1.svg" alt="Arrow" width="24px" height="24px" />
                                    <span>Доставка Укрпоштою</span>
                                    <Popup type="normal" display={upDisplay} title="Доставка Укрпочтой" text="От 50$ к отделению" button="Подробнее" />
                                </div>
                            </div>
                            <div className={css.reviews}>
                                {rate} reviews and product code
                            </div>
                        </div>
                    </div>
                    <div className={css.infoBuy}>
                        <div className={css.block}>
                            <div className={css.price}>
                                <b>{price}</b>
                            </div>
                            <div className={css.buttons}>
                                <button className={css.buy}>Купити</button>
                                <button className={css.order}>Швидке замовлення</button>
                            </div>
                            <div className={css.controlls}>
                                <div className={css.img}>
                                    <img src="/img/compare.svg" alt="Arrow" width="20px" height="20px" />
                                </div>
                                <div className={css.img}>
                                    <img src="/img/heart.svg" alt="Arrow" width="20px" height="20px" />
                                </div>
                            </div>
                        </div>
                        <div className={css.bonus}>
                            bonus
                        </div>
                    </div>
                    <div className={css.infoCredit}>
                        <div className={css.content}>
                            <div className={css.item}>
                                <img src="https://cdn.comfy.ua/media/label/Group%20473_3.svg" alt="Arrow" />
                            </div>
                            <div className={css.item}>
                                <img src="https://cdn.comfy.ua/media/label/Group%20496_2.svg" alt="Arrow" />
                            </div>
                            <div className={css.item}>
                                <img src="https://cdn.comfy.ua/media/label/Group%20378_2.svg" alt="Arrow" />
                            </div>
                        </div>
                        <button className={css.btn}>Купити в кредит</button>
                    </div>
                    <div className={css.infoAlternatives}>
                        <p className={css.title}>Iншi моделi</p>
                        <div className={css.actions}>
                            <div className={css.colors}>
                                <div className={css.color}></div>
                            </div>
                            <div className={css.memory}>
                                <div className={css.item}>
                                    {ram} ГБ
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.infoService}>
                        <Carousel display="small" header="Выберите сервис" items={mockCarouselData.items} />
                    </div>
                    <div className={css.infoAccessories}>
                        <Carousel display="small" header="Выберите аксесуар" items={mockCarouselData.items} />
                    </div>
                </div>
            </div>
            <Carousel display="normal" header="Посмотрите ещё" items={mockCarouselData.items} />
            <div className={css.features}>
                <>
                    <h2 className={css.title}>Характеристики {name}</h2>
                    <ul className={css.featureList}>
                        <li className={cx(css.featureItem, css.withBg)}>
                            <span className={css.featureName}>Диагональ дисплея</span>
                            <b>{displaySize}</b>
                            <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                        </li>
                        <li className={css.featureItem}>
                            <span className={css.featureName}>Разрешение экрана</span>
                            <b>{displayResolution}</b>
                            <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                        </li>
                        <li className={cx(css.featureItem, css.withBg)}>
                            <span className={css.featureName}>Тип экрана</span>
                            <b>{displayType}</b>
                            <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                        </li>
                        <li className={css.featureItem}>
                            <span className={css.featureName}>Частота обновления экрана</span>
                            <b>{displayFrashrate} Гц</b>
                            <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                        </li>
                    </ul>
                    <button className={css.showMoreBtn}>
                        <span>Показать больше</span>
                        <img src="https://www.svgrepo.com/show/17594/plus.svg" alt="Question icon" width="16px" height="16px" />
                    </button>
                </>
            </div>
            <div className={css.description}>
                <h2 className={css.title}>Описание смартфона</h2>
            </div>
            <div className={css.review}>
                <h2 className={css.title}>Отзывы</h2>
                <button className={css.showMoreBtn}>
                    <span>Показать больше</span>
                    <img src="https://www.svgrepo.com/show/17594/plus.svg" alt="Question icon" width="16px" height="16px" />
                </button>
            </div>
            <div className={css.photos}>
                <h2 className={css.title}>Фото</h2>
            </div>
        </div>
    );
};

export default Product;
