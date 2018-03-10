import React from 'react';
import PCHeader from '../../component/pc/header/pc_header';
import PCFooter from '../../component/pc/footer/pc_footer';

export default class PCApp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <PCHeader/>
                {this.props.children}
                <PCFooter/>
            </div>
        );
    }
}