module.exports = (function(){
    let cart = [];

    function addItem(item){
        cart.push(item)
    }

    function getAll(){
        return cart;
    }

    function findItem(id){
        return cart.find((i)=>i.id == id)
    }
    //This object will have the followig methods 
    return {
        addItem, getAll, findItem
    }
})();
