import React from 'react';
export default class LoadMore extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        this.props.loadMoreFn();
    }

    componentDidMount(){
        const loadMoreFn=this.props.loadMoreFn;
        const wrapper=this.refs.wrapper;
        let timeoutId;
        function callback(){
            //得到加载更多div距离顶部的距离
           let top=wrapper.getBoundingClientRect().top;
           let windowHeight=window.screen.height;
           //如果top距离比屏幕距离小，说明加载更多被暴露
           if(top&&top<windowHeight)
               loadMoreFn();
        }
        //添加滚动事件监听
        window.addEventListener('scroll',function () {
            if(this.props.isLoadingMore)
                return;
            if(timeoutId)
                clearTimeout(timeoutId);
            //因为一滚动就会触发事件，我们希望50ms才触发一次
            timeoutId=setTimeout(callback,50);
        }.bind(this),false);
    }


    render(){
        return(
            <div ref='wrapper' style={{textAlign:'center',backgroundColor:'#F8F8F8'}}>
                {
                    this.props.isLoadingMore?
                        <span>加载中...</span>
                        :<span onClick={this.handleClick.bind(this)}>加载更多</span>
                }
            </div>
        );
    }
}