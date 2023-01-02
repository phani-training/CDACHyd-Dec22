import React, { Component } from "react";
import apples from './Images/Apples.jfif';
import gauvas from './Images/Gauvas.jfif';
import mangoes from './Images/Oranges.jfif';
import oranges from './Images/Mangoes.jfif';
import Product from "./Product";
export default class ShoppingApp extends Component{
    constructor(props){
        super(props);
        this.state = { }//The place where U store the data so that it can be used in various parts of the component. 
    }
    render(){
        const products = [
            {
                "name" : "Apples",
                "price" : "Rs.200",
                "quantity" : "1 Kg",
                "picture" : apples
            },
            {
                "name" : "Mangoes",
                "price" : "Rs.150",
                "quantity" : "1 Kg",
                "picture" : mangoes
            },
            {
                "name" : "Oranges",
                "price" : "Rs.50",
                "quantity" : "1 Kg",
                "picture" : oranges
            },
            {
                "name" : "Gauvas",
                "price" : "Rs.60",
                "quantity" : "1 Kg",
                "picture" : gauvas
            }
        ]
        const cards = products.map((p) => <Product item ={p}/>)
        return(
          cards
        )
    }
}