import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';

import BlogPost from '../../components/UI/Blog/BlogPost/BlogPost';
import './Blog.css';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    render() {
        return (
            <div className="Blog">
                <Toolbar/>
                <div className="Blog__header">
                    <h1>Chatshier</h1>
                    <h4>專業客服體驗管理平台</h4>
                </div>
                <Container className="Blog__posts">
                    <BlogPost
                        image={'https://unsplash.it/1400/789'}
                        title={'訊息串接設定'}
                        body={'串接LINE@，Facebook粉絲頁到 Chatshier 服務平台。內有圖文解釋，讓您可以輕鬆設定使用 Chatshier...'}
                        link={'/post/1'}
                        author={'TED'}
                        updatedTime={'2017/11/17'} />
                    <BlogPost
                        image={'https://unsplash.it/1400/789'}
                        title={'整合即時聊天與CRM'}
                        body={'整合即時聊天功能和CRM系統是目前的新趨勢，因為這樣小小的一個整合動作事實上可以帶來大且深遠的影響力。 一個良好的客服功能整合必須包含兩個部分：顧客滿意程度和使用者滿意程度，這是我們建議您 ...'}
                        link={'/post/1'}
                        author={'Janet'}
                        updatedTime={'2017/11/17'} />
                    <BlogPost
                        image={'https://unsplash.it/1400/789'}
                        title={'完美處理客戶投訴'}
                        body={'客戶投訴永遠是做服務業的難題，而時代在變，不管各行各業都越來越像服務業，以客為尊幾乎快變成了各個行業的聖旨， 隨著全民狗仔的盛行，顧客的地位日益高漲，也許只是一件小事情沒處理好 ...'}
                        link={'/post/1'}
                        author={'YK'}
                        updatedTime={'2017/11/17'} />
                    <BlogPost
                        image={'https://unsplash.it/1400/789'}
                        title={'真人vs機器人'}
                        body={'為了避免被機器取代， Chatshier 使用真人代替高科技，帶給你的潛在客戶潛在客戶、陌生訪客一個最貼近人心的服務。  Chatshier 可以依據潛在客戶與陌生訪客說話方式的不同，而進一步去 ...'}
                        link={'/post/1'}
                        author={'YK'}
                        updatedTime={'2017/11/17'} />
                    <BlogPost
                        image={'https://unsplash.it/1400/789'}
                        title={'培養客戶，開拓藍海'}
                        body={'在現今社會中所有的行業都免不了與服務扯上關係，顧客體驗已經不僅是服務業首要目標，在未來，無法成功轉型為服務業的 企業將會面臨無止盡的削價競爭，而取得良好顧客體驗的企業將坐擁一 ...'}
                        link={'/post/1'}
                        author={'YK'}
                        updatedTime={'2017/11/17'} />
                    <BlogPost
                        image={'https://unsplash.it/1400/789'}
                        title={'服務才是商品的本質'}
                        body={'台灣整體以中小型企業為主，但是對大多數的中小型企業來說，削價競爭似乎是唯一殺出一條血路的方法，而在滿滿的競爭對手中， 不停的削價往往帶來只是慘痛的結果，有的只是一時且微薄的利潤，想要企 ...'}
                        link={'/post/1'}
                        author={'YK'}
                        updatedTime={'2017/11/17'} />
                    <BlogPost
                        image={'https://unsplash.it/1400/789'}
                        title={'數據才是說故事的高手'}
                        body={'你可曾困惑到底為何客人的回流率這麼差？你可曾困惑為何客人的滿意度這麼低？別在瞎猜了， Chatshier 透過文字客服幫你累積滿滿的數據， 不管是統整後的資訊抑或是細節的歷史聊天訊息 ...'}
                        link={'/post/1'}
                        author={'YK'}
                        updatedTime={'2017/11/17'} />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Blog;
