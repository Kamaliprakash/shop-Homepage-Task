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
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKX-Tthh7vvaxoSHpmGOvm05y_wh1hoRa5ak6awP7mLAcxv47k9afUWzZPwDfjey0ols&usqp=CAU',
},

{
  name: 'Special Item',
  Price: '$20.00 $18.00',
  sale: true,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACshAoZg2_s6JwsQ8g3ddgmKVAVnrOVogDQ&usqp=CAU',
},
{
  name: 'Sale Item',
  Price: '$50.00 $25.00',
  sale: true,
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBk0B18k5mLsj4_EIPv-GS7QJG6MijuW0dg&usqp=CAU',
},
{
  name: 'Popular Item',
  Price: '$40.00',
  sale: false,
  originalPrice: '',
  original: false,
  reviews: true,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXnR9PVSv0gctQ8L6kTKl-_6bShYBU3esyQ&usqp=CAU',
},
{
  name: 'Sale Item',
  Price: '$50.00 $25.00',
  sale: true,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBk0B18k5mLsj4_EIPv-GS7QJG6MijuW0dg&usqp=CAU',
},
{
  name: 'Fancy Product',
  Price: '$120.00 - $280.00',
  sale: false,
  originalPrice: '',
  original: false,
  reviews: true,
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKX-Tthh7vvaxoSHpmGOvm05y_wh1hoRa5ak6awP7mLAcxv47k9afUWzZPwDfjey0ols&usqp=CAU',
},
{
  name: 'Special Item',
  Price: '$20.00 - $18.00',
  sale: true,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACshAoZg2_s6JwsQ8g3ddgmKVAVnrOVogDQ&usqp=CAU',
},
{
  name: 'Popular Item',
  Price: '$40.00',
  sale: false,
  originalPrice: '',
  original: false,
  reviews: true,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXnR9PVSv0gctQ8L6kTKl-_6bShYBU3esyQ&usqp=CAU'
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

      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                
                            </div>
     
    </>
}

export default App
