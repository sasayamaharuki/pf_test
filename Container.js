import React , {Component} from 'react';
import './css/mainStyle.css';
import mainLogo from './image/my-way-logo.png'; //メインロゴ
import  ContainerMenu from './ContainerMenu';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            logoDisplay : true,
        }
        this.changeToMainPage = this.changeToMainPage.bind(this);
    }

    changeToMainPage = () => {
        this.setState ({
            logoDisplay : !true,
        });
    }
    
    render(){

        const logoDisplay = this.state.logoDisplay;
        let containerMenu;
        if(logoDisplay){
            containerMenu = null;
        }else{
            containerMenu = <ContainerMenu />
        }
        return(
            <div className="container">
                <div className='container-canvas'>
                    <img className={this.state.logoDisplay ? 'container-logo' : 'container-logo-false'} src={mainLogo} alt='mainLogo' onClick={this.changeToMainPage}/>
                    <span className={this.state.logoDisplay ? 'container-greeting' : 'container-greeting-false'}>welcome</span>

                    {/* 画面のメインメニューを全体設計 */}
                        {containerMenu}
                </div>
            </div>
        )
    }
}

export default Container;


