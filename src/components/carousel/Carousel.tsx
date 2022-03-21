import React from 'react'
import styles from './Carousel.module.css'
import {Carousel as AnCarousel,Image} from 'antd'
import Carousel1 from '../../assets/images/carousel_1.jpg';
import Carousel2 from '../../assets/images/carousel_2.jpg';
import Carousel3 from '../../assets/images/carousel_3.jpg';

export const Carousel: React.FC = () => {
    return (
        <AnCarousel autoplay className={styles.slide}>
            <Image src={Carousel1}/>
            <Image src={Carousel2} />
            <Image src={Carousel3}/>     
        </AnCarousel>

    )

}