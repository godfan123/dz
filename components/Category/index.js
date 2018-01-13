import React from 'react';
import { Carousel, WhiteSpace, WingBlank ,Grid, Flex} from 'antd-mobile';
import './style.css';
import liren from './images/01丽人icon_7.png';
import yuele from './images/01休闲娱乐icon_4.png';
import zhoubianyou from './images/01周边游icon_10png.png';
import waimai from './images/01外卖icon_5.png';
import dujiachuxing from './images/01度假出行icon_8.png';
import huoguo from './images/01火锅icon_6.png';
import dianying from './images/01电影icon_2.png';
import meishi from './images/01美食icon_1.png';
import zuliaoanmo from './images/01足疗按摩icon_9.png';
import jiudian from './images/01酒店icon_3.png';
import ktv from './images/02KTVicon_2.png';
import qinzi from './images/02亲子icon_7.png';
import xiaochikuaican from './images/02小吃快餐icon_8.png';
import saokao from './images/03烧烤icon_7.png';
import jiehun from './images/03结婚icon_3.png';
import xican from './images/03西餐icon_5.png';
import ribencai from './images/03日本菜icon_1.png';
class BannerAd extends React.Component{
 constructor(props){

     super(props);
     this.state = {
         data: ['1', '2', '3'],
         imgHeight: 176,
         slideIndex: 0,
     }
 }
    render(){

        return (
            <div>
                <Carousel className="scrollPic"
                    autoplay={false}
                    infinite
                    selectedIndex={0}
                >
                        <a
                            key={1}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >

                            <Flex>
                                <Flex.Item><a href=""><img src={liren}  />丽人</a></Flex.Item>
                                <Flex.Item><img src={yuele} />娱乐</Flex.Item>
                                <Flex.Item><img src={zhoubianyou} />周边游</Flex.Item>
                                <Flex.Item><img src={waimai}/>外卖</Flex.Item>

                            </Flex>
                            <Flex>
                                <Flex.Item><img src={dujiachuxing}  />度假出行</Flex.Item>
                                <Flex.Item><img src={huoguo} />火锅</Flex.Item>
                                <Flex.Item><img src={dianying} />电影</Flex.Item>
                                <Flex.Item><img src={meishi}/>美食</Flex.Item>

                            </Flex>


                        </a>



                    <a
                        key={2}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <Flex>
                            <Flex.Item><img src={zuliaoanmo}  />助疗按摩</Flex.Item>
                            <Flex.Item><img src={jiudian} />酒店</Flex.Item>
                            <Flex.Item><img src={ktv} />KTV</Flex.Item>
                            <Flex.Item><img src={qinzi}/>亲子</Flex.Item>

                        </Flex>


                    </a>

                    <a
                        key={3}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <Flex>
                            <Flex.Item><img src={jiehun}  />结婚</Flex.Item>
                            <Flex.Item><img src={xican} />西餐</Flex.Item>
                            <Flex.Item><img src={ribencai} />日本菜</Flex.Item>
                            <Flex.Item><img src={saokao}/>烧烤</Flex.Item>

                        </Flex>

                    </a>



                </Carousel>

            </div>

        )
    }


}


export default BannerAd

