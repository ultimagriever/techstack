import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../../components';
import styles from './styles';
import { selectLibrary } from '../../actions';

class ListItem extends Component {
  render() {
    console.log(this.props)

    return (
        <TouchableWithoutFeedback onPress={() => this.props.onSelectLibrary(this.props.library.id)}>
          <View>
            <CardSection>
                <Text
                    style={this.props.libraryIsSelected ?
                        [styles.title, styles.selectedTitle] : styles.title}
                >
                  {this.props.library.title}
                </Text>
            </CardSection>
            {
                this.props.libraryIsSelected ? (
                    <CardSection>
                      <Text style={styles.description}>{this.props.library.description}</Text>
                    </CardSection>
                ) : null
            }
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { selectedLibraryId } = state.selectedLibraryId;

  return {
    libraryIsSelected: selectedLibraryId === ownProps.library.id
  };
};

const mapDispatchToProps = dispatch => ({
  onSelectLibrary: id => dispatch(selectLibrary(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
