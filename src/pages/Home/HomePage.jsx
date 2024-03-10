import React, { useState } from 'react';

import { StyleHomePage } from './HomePage.styled';

const HomePage =() => {

    return(
        <StyleHomePage  >
            <h1 className='titleHP'>Добро пожаловать!</h1>
                <h3 className='textHP_h'> Аренда новых автомобилей в Украине с доставкой по адресу за 1 час</h3>
                <p className='textHP'> Аренда авто посуточно — это лучший способ перемещения по городам-миллионникам независимо от времени года.</p>
                <p className='textHP'>Компания RENTAL предоставляет услуги по аренде авто во всех крупных городах Украины.</p>
                <p className='textHP'>Oгромный выбор автомобилей, начиная от эконом класса, вроде Chevrolet Spark, заканчивая премиальными моделями седанов по типу Mercedes S класса и внедорожников — Audi Q7 и Toyota Land Cruiser 200, которыми вы можете управлять сами без водителя</p> 
                <p className='textHP'>Когда вы берете машину на прокат на нашем сайте, то выбираете именно конкретную модель, а не класс автомобиля.</p>

        </StyleHomePage> 
    )
    
}

export default HomePage;