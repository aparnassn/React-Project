import React from "react";
import useShop from "./ShopContext";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useContent } from "./BlogCardsA";

function Cart() {
  const { products, total } = useShop();
  const {data}=useContent()
  console.log(data)
  return (
    <div>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </div>
  );
}

export default Cart;

const Title =styled.p`
  font-weight : bold;
  font-size : 20px;
  margin-top : 20px;
`;

const ProductsWrapper =styled.div`
  width : fit-content;
  display : grid;
  grid-template-columns : repeat(2,auto);
`;