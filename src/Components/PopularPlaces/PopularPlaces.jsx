import React from 'react';
import placecss from './PopularPlaces.module.scss';
import Card from './Card';

const data = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/6481558/pexels-photo-6481558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Nepal',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/7366019/pexels-photo-7366019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Germany',
  },
  // {
  //   id: 3,
  //   img: 'https://i.pinimg.com/474x/3f/81/ac/3f81accdfb3743a1291acaafe654c717.jpg',
  //   title: 'Amritsar',
  // },
  // {
  //   id: 4,
  //   img: 'https://images.pexels.com/photos/5499902/pexels-photo-5499902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   title: 'Agra',
  // },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1535280783-cd33989a9522?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80',
    title: 'Bhutan',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1609948543911-7f01ff385be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80',
    title: 'China',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1625464264698-fdd9961710dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    title: 'USA',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80',
    title: 'Canada',
  },
  {
    id: 9,
    img: 'https://images.pexels.com/photos/6730935/pexels-photo-6730935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'EU',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1535280783-cd33989a9522?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80',
    title: 'UK',
  },
  {
    id: 11,
    img: 'https://images.pexels.com/photos/7919635/pexels-photo-7919635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'India',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/flagged/photo-1579201661176-1e69dabbb98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
    title: 'Ukraine',
  },
];

const PopularPlaces = () => {
  return (
    <div className={placecss.popularplacescontainer}>
      <h1 style={{ fontSize: '36px',textAlign: 'center', marginTop: '3%' ,marginBottom:"2%" }}>Popular Destination</h1>
      <div className={placecss.cardcontainer}>
        {data.map((card, index) => (
          <Card title={card.title} key={index} imageurl={card.img} />
        ))}
      </div>
    </div>
  );
};

export default PopularPlaces;