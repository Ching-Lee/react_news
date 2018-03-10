import React from 'react';
import MobileHeader from '../../component/mobile/header/mobile_header';
import MobileFooter from '../../component/mobile/footer/mobile_footer';
import MobileContent from '../../component/mobile/content/mobile_content';


export default class MobileApp extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileContent/>
                <MobileFooter/>
            </div>

        );
    }
}