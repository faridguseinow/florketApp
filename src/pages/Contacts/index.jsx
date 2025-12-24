import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import TGimg from '/src/assets/icons/social/icons8-telegram.svg';
// import VKimg from '/src/assets/icons/social/icons8-vk.svg';
// import Insimg from '/src/assets/icons/social/icons8-instagram.svg';
// import YTimg from '/src/assets/icons/social/icons8-youtube.svg';

//import images
// import Num1 from '/src/assets/icons/logo_sm.svg'
// import Num2 from '/src/assets/icons/flowers_icons/chrysanthemum.png'
// import Num357 from '/src/assets/icons/flowers_icons/rose.png'
// import Num4 from '/src/assets/icons/flowers_icons/exotic.png'
// import Num6 from '/src/assets/icons/flowers_icons/domestic.png'
// import Num8 from '/src/assets/icons/flowers_icons/packaging.png'
// import Num9 from '/src/assets/icons/flowers_icons/kitay.png'
// import Num10 from '/src/assets/icons/flowers_icons/suxocvet.png'


export default function index() {
  return (
    <div className="numbers_container">
      <h2>Контакты</h2>

      <div className="number_container_inner">


        <div className="num_section">

          <div className="num_sec_top">
            <p>Оставьте заказ по номеру</p>
          </div>

          <div className="num_sec_bottom">

            <div className="bottom_nums">

              <a href='tel:89162579174'>+7 916 257-91-74</a>
              <a className='social_media1' href='https://t.me/florketcveti'>Телеграм</a>

            </div>

            <div className="bottom_nums">

              <a href='tel:89935879174'>+7 993 587-91-74</a>
              <a className='social_media2' href='https://wa.me/79935879174'>Whatsapp</a>

            </div>
          </div>
        </div>


      </div>

      <div className="social">
        <h2>Телеграм канал:</h2>
        <div className="social_media_container">
          {/* <Link to={'https://www.instagram.com/gfccru'} target={'_blank'}>
            <img src={Insimg} alt="instagram" /> </Link> */}
          <Link to={'https://t.me/Florketdostavkacvetov'} target='_blank'>
          <span>Florket - сборка и доставка цветов</span>
            <img src={TGimg} alt="telegram" /> </Link>
          {/* <Link to={'https://vk.com/gfccru'} target='_blank'>
            <img src={VKimg} alt="facebook" /> </Link>
          <Link to={'https://www.youtube.com/@gfccru'} target='_blank'>
            <img src={YTimg} alt="youtube" /> </Link> */}
        </div>

        {/* <div className="web_div">
          <Link to={'https://www.gfcc.ru'} target='_blank'>Вебсайт🌐 www.gfcc.ru</Link>
          <Link to={'mailto:info@gfcc.ru'} target='_blank'>Почта📧 info@gfcc.ru</Link>
        </div> */}
      </div>
    </div>
  )
}
