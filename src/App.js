import './App.css';
import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Additem from './components/Additem';



function App() {
  const product = [
    {
      price:99999,
      name:"IPhone 14 pro",
      quantity:0,
    },
    {
      price:9999,
      name:"Redmi Note 14",
      quantity:0,
    },
  ]
  
  let [productList,setProductList] = useState(product);
  let [totalAmount,setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0)
    { newProductList[index].quantity-- ;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((product)=>{
      product.quantity = 0 
    })
    setProductList(newProductList);
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
    newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <Additem addItem={addItem}/>  
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}
    removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    
    
    </>
  );
}

export default App;
