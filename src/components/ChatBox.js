import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {
  Card,
} from 'react-native-material-design';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height: 0,
    };
  }
  render() {
    const styles = StyleSheet.create({
      mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF135D',
      },
      mainCard: {
        width: '100%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
      },
      textArea: {
        flex: 15,
        width: '90%',
        height: '90%',
      },
      submitArea: {
        flexGrow: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
      },
    });

    return (
      <View style={styles.mainContainer}>
        <Card style={styles.mainCard}>
          <View style={styles.textArea}>
            <TextInput
              multiline
              defaultValue="message"
              onChange={(event) => {
                this.setState({
                  text: event.nativeEvent.text,
                  height: (Math.ceil(event.nativeEvent.text.length / 20) * 35),
                });
              }}
              style={[styles.default, { height: Math.max(35, this.state.height), fontSize: 20 }]}
              value={this.state.text}
            />
          </View>
          <View style={styles.submitArea}>
            {
              console.log('hahaha',this.props.topicInfo)
            }
            <TouchableHighlight onPress={() => {
              this.props.submitMessage(this.state.text, this.props.group.current_topic_id);
              this.setState({
                text: '',
                height: 35,
              });
            }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../../public/ic_send_48pt_2x.png')}
              />
            </TouchableHighlight>
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    group: state.group,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
};
export default connect(mapStateToProps, matchDispatchToProps)(ChatBox);