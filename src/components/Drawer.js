import React, { Component } from 'react';
import { Drawer } from 'native-base';
import Signup from './Signup';
export default class DrawerExample extends Component {
  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  closeDrawer() {
    this.drawer._root.close();
  }
  openDrawer() {
    this.drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Signup navigator={this.props.navigator} />}
        onClose={() => this.closeDrawer()} >
      </Drawer>
    );
  }
}
