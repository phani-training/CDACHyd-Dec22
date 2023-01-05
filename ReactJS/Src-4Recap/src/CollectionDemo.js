import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Item from './Item';

export default class CollectionDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
        "products" :[
            {"name" : "Sony TV", "price" : 60000},
            {"name" : "Samsung TV", "price" : 55000},
            {"name" : "Mi TV", "price" : 45000},
            {"name" : "Panasonic TV", "price" : 35000},
            {"name" : "BPL TV", "price" : 30000}
        ]
    };//singleton object.
  }
  render() {
    const data = this.state.products;
    const itemComponents = data.map((i)=> <Item info = {i}/> )
    return (
      itemComponents
    )
  }
}
