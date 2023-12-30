import React,{useState} from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import Header from "./components/Header";

function App() {

  const data =[{
    name: 'Fancy Product',
    Price: '$40.00 - $80.00',
    sale: false,
    originalPrice: '',
    original: false,
    reviews: true,
},

{
  name: 'Special Item',
  Price: '$20.00 $18.00',
  sale: true,
},
{
  name: 'Sale Item',
  Price: '$50.00 $25.00',
  sale: true,
},
{
  name: 'Popular Item',
  Price: '$40.00',
  sale: false,
  originalPrice: '',
  original: false,
  reviews: true,
},
{
  name: 'Sale Item',
  Price: '$50.00 $25.00',
  sale: true,
},
{
  name: 'Fancy Product',
  Price: '$120.00 - $280.00',
  sale: false,
  originalPrice: '',
  original: false,
  reviews: true,
},
{
  name: 'Special Item',
  Price: '$20.00 - $18.00',
  sale: true,
  
},
{
  name: 'Popular Item',
  Price: '$40.00',
  sale: false,
  originalPrice: '',
  original: false,
  reviews: true,
}
  ];

  let [cart,setCart] = useState(0)
  return <>
      <TopBar cart= {cart} setCart={setCart}/>
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5"> 
         <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e,i)=>{
                return  <Card e ={e} key={i} cart = {cart} setCart={setCart}></Card>
              })
            }
          
  
          </div>
        </div>
       
      </section>
    </>
}

export default App
