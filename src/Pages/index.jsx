import React, { useEffect, useState } from 'react';

import HeaderTop from '../Components/Header_Top';

import { useDispatch } from "react-redux";

import { addCart } from "../Redux/action/index";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../assets/style/swiper.css';
import "swiper/css";
import "swiper/css/pagination";
import load from '../assets/img/load.svg';
import loaddot from '../assets/img/loaddot.svg';
import axios from 'axios';


let date = Date();// vaqt




const Index = () => {


  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  const [data, setData] = useState([]);
  const [foodwiew, setFoodWiew] = useState([])
  const [state, setState] = useState(false)

  useEffect(() => {
    AllForGetApi()
  }, [])
  const uriApi = 'https://stratappresturant.herokuapp.com/api/v1/org/1/getHomeDetail/';
  const AllForGetApi = async () => { // mahsulotlarni get so'rovi bilan chaqirib olish
    const response = await axios.get(`${uriApi}`);
    const data = response.data
    setData(data); // setDataga api dagi datani yuklayapman
  }
  const onWiew = (e, key, index) => { // mahsulot haqida batafsil ko'rish
    setFoodWiew(key.product[index])
    // console.log(foodwiew);
    onSee(e)
  }
  const onSee = (e) => { //OnFoodWeiw oynasini  ochib yopish
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  //=================OnFoodWeiw=======================================================================================
  const OnFoodWeiw = ({foodwiew})=>{
    return(
      <>
      <main className={state ? 'OnFoodWeiw OnFoodWeiwTrue': "OnFoodWeiw OnFoodWeiwFalse"}>
        <div className="container">
          {
            foodwiew.map((item,index)=>(
                  <h1> {item.product_name}</h1>
            ))
            /// shu qismi qolgan korzinkasi tugagan
            
          }
          <h1>Taom nomi</h1>
        </div>
      </main>
      
      </>
    )
  }
  //========================================================================================================
  return (
    <>
      <HeaderTop stolNumber={1} restoranName={data.organizatsion} />

      <OnFoodWeiw foodwiew={foodwiew}/>

      {data.category ? data.category.map(
        (key, index) => (
          <div className="container" key={index}>
            <h1 className="categoryName">{key ? key.name : "No name"}</h1>
            <Swiper key={index} slidesPerView={1.5} spaceBetween={10} pagination={{ clickable: true }} className="mySwiper">
              {
                key.product.map((item, index2) => (
                  <SwiperSlide onClick={(e) => onWiew( e , key, index2)} key={index2}>
                    <div className="foodCard">
                      <div className="foodCardBody">
                        {
                          item ? <img src={item.url_photo} alt={date} /> : <img src={load} alt={load + date} />
                        }
                       
                      </div>
                      <div className="foodCardBody">
                        {
                          item ? item.product_name : <img src={loaddot} className={'loaddot'} alt="" />
                        }

                        {/* <h2 className="foodName">
                            </h2> */}
                      </div>
                    </div>
                  </SwiperSlide>


                ))
              }
            </Swiper>
          </div>
        )
      ) : ""}
     

    

      <button onClick={addProduct}>asd</button>

    </>
  )
}

export default Index;