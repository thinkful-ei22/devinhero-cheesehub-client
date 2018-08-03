import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component{

  componentDidMount(prevProps){
    this.props.dispatch(fetchCheeses());
  }

  render(){
    const cheeseListItems = this.props.cheeses.map(cheese => (<li>{cheese}</li>));
    // console.log(this.props.cheeses);
    return(  
      <ul>
        {cheeseListItems}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);