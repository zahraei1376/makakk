import  React from 'react';
import Toolbar from './Toolbar/toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';

export default class Menu extends React.Component{
    state={
        SideDrawerOpen:false
    }
    
    DrawerToggleClickHandle=()=>{
        this.setState((prestate)=> {
            return {SideDrawerOpen: !prestate.SideDrawerOpen}
        });
    };

    backdropClickHandle=()=>{
        this.setState({SideDrawerOpen:false})
    }

    render() {
        let backDrop;
        if ((this.state.SideDrawerOpen))
        {
            backDrop=<BackDrop click={this.backdropClickHandle} />
        }
        return(

            <div style={{height:'100%'}}>
                <Toolbar DrawerClickHandle={this.DrawerToggleClickHandle}/>
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backDrop}
            </div>
        )
    }
}