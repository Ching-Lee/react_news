import React from 'react';
import img1 from '../../../static/images/carousel_1.jpg';
import img2 from '../../../static/images/carousel_2.jpg';
import img3 from '../../../static/images/carousel_3.jpg';
import img4 from '../../../static/images/carousel_4.jpg';
import {Tabs,Carousel} from 'antd';
import MobileNews from '../../../component/mobile/content/mobile_news';
export default class MobileContent extends React.Component {
    render() {

      return(
          <Tabs>
              <Tabs.TabPane tab='头条' key='1'>
                  <div>
                      <Carousel autoplay>
                          <div><img src={img1}/></div>
                          <div><img src={img2}/></div>
                          <div><img src={img3}/></div>
                          <div><img src={img4}/></div>
                      </Carousel>
                  </div>

                  <MobileNews count={50} type='top' ImageWidth='112px' width='100%'/>
              </Tabs.TabPane>

              <Tabs.TabPane tab='国内' key='3'>
                  <div>
                      <Carousel autoplay>
                          <div><img src={img1}/></div>
                          <div><img src={img2}/></div>
                          <div><img src={img3}/></div>
                          <div><img src={img4}/></div>
                      </Carousel>
                  </div>
                  <MobileNews  type='guonei' ImageWidth='112px' width='100%'/>
              </Tabs.TabPane>
              <Tabs.TabPane tab='国际' key='4'>
                  <div>
                      <Carousel autoplay>
                          <div><img src={img1}/></div>
                          <div><img src={img2}/></div>
                          <div><img src={img3}/></div>
                          <div><img src={img4}/></div>
                      </Carousel>
                  </div>
                  <MobileNews  type='guoji' ImageWidth='112px' width='100%'/>
              </Tabs.TabPane>
              <Tabs.TabPane tab='娱乐' key='5'>
                  <div>
                      <Carousel autoplay>
                          <div><img src={img1}/></div>
                          <div><img src={img2}/></div>
                          <div><img src={img3}/></div>
                          <div><img src={img4}/></div>
                      </Carousel>
                  </div>
                  <MobileNews  type='yule' ImageWidth='112px' width='100%'/>
              </Tabs.TabPane>

              <Tabs.TabPane tab='社会' key='6'>
                  <div>
                      <Carousel autoplay>
                          <div><img src={img1}/></div>
                          <div><img src={img2}/></div>
                          <div><img src={img3}/></div>
                          <div><img src={img4}/></div>
                      </Carousel>
                  </div>
                  <MobileNews  type='shehui' ImageWidth='112px' width='100%'/>
              </Tabs.TabPane>

              <Tabs.TabPane tab='体育' key='7'>
                  <div>
                      <Carousel autoplay>
                          <div><img src={img1}/></div>
                          <div><img src={img2}/></div>
                          <div><img src={img3}/></div>
                          <div><img src={img4}/></div>
                      </Carousel>
                  </div>
                  <MobileNews  type='tiyu' ImageWidth='112px' width='100%'/>
              </Tabs.TabPane>

              <Tabs.TabPane tab='科技' key='8'>
                  <div>
                      <Carousel autoplay>
                          <div><img src={img1}/></div>
                          <div><img src={img2}/></div>
                          <div><img src={img3}/></div>
                          <div><img src={img4}/></div>
                      </Carousel>
                  </div>
                  <MobileNews  type='keji' ImageWidth='112px' width='100%'/>
              </Tabs.TabPane>

          </Tabs>
      );
    }
}