import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {ReactComponent as Star} from '../../../img/star.svg'
import { addItemInCart, removeItemFromCart } from '../../../Redux/action/cart';
import { modifyName } from './utils';
import Images from '../../../images';
import {
  Container,
  MenuDisplayBox,
  MenuDisplayImage,
  MenuDisplayInfoBox,
  AddItemBox,
  BackToMenuInfo,
  PriceInfoBox,
  RadioBoxDiv,
  RadioInput,
  Label,
  Quantity,
  QuantityPickerBox,
  Minus,
  Plus,
  RadioWrapper
} from './style';



function Index({ price, name, type, isVeg, rating, _id, images }) {
  const dispatch = useDispatch();

  let modifiedname = modifyName(name);
  const [cartUpdate, setCartUpdated] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [totalPrice, setPrice] = useState("half");
  const [amount, setAmount] = useState(0);
  const [prevAmount, setPrevAmount] = useState(null);
  const [cart, setCart] = useState({
    menuname: name,
    _id,
    isVeg,
    type,
    rating,
    quantity: null,
    price: null
  });

  const radioBtnValue = (e) => {
    setPrice(e.target.value);
  }
  const quantityIncrement = () => {
    setAmount(prevsatate => prevsatate + 1);
  }
  const quantityDecrement = () => {
    setPrevAmount(amount);
    if (amount > 0) setAmount(prevsatate => prevsatate - 1);
  }
  const handleClick = () => {
    setOpenCart(!openCart);
  }

  useEffect(() => {
    if (amount !== 0) {
      let priceSelected = totalPrice === "half" ? price[0] : price[1]
      setCart({
        ...cart,
        price: priceSelected * amount,
        quantity: `${amount} ${totalPrice}`
      });
      setCartUpdated(true)
    }
    if (prevAmount === 1) {
      dispatch(removeItemFromCart(cart));
    }
  }, [amount, prevAmount])

  useEffect(() => {
    if (cartUpdate) {
      dispatch(addItemInCart(cart))
      setCartUpdated(false);
    }
  }, [cartUpdate])

  return (
    <Container>

      <MenuDisplayBox>
        <MenuDisplayImage 
          src={Images[modifiedname]} 
          alt={name}  
          loading="lazy"

        />
        <MenuDisplayInfoBox
          display={openCart ? "none" : "flex"}
        >
          <span className="menuname">{name}</span>
          {type && <span className="menutype">In {type}</span>}
          <span className="menurating">{rating} <Star className='star'/></span>
          <span className="menuprice">{price[0]} INR</span>
          <div className="addToCart" onClick={handleClick}>ADD +</div>
        </MenuDisplayInfoBox>
        <AddItemBox
          openAddBox={openCart ? "100%" : "0%"}
          smallDisplayWidth={openCart ? "60%" : "0%"}
          padding={openCart ? "1rem" : "0"}
        >
          <BackToMenuInfo
            addBackBtn={openCart ? "flex" : "none"}
          >
            <i
              className="fas fa-long-arrow-alt-right"
              onClick={handleClick}
            ></i>
          </BackToMenuInfo>
          <PriceInfoBox
            display={openCart ? "block" : "none"}
          >
            <RadioBoxDiv>
              <RadioWrapper>
                <RadioInput
                  type="radio"
                  name={_id}
                  id="half"
                  value="half"
                  checked={totalPrice === "half"}
                  onChange={radioBtnValue}
                />
                <Label color="#333">Half</Label>
              </RadioWrapper>
              <Label color="#251A24"><i class="fas fa-rupee-sign"></i>{price[0]}</Label>
            </RadioBoxDiv>
            {price[1] && <RadioBoxDiv>
              <RadioWrapper>
                <RadioInput
                  type="radio"
                  name={_id}
                  id="full"
                  value="full"
                  checked={totalPrice === "full"}
                  onChange={radioBtnValue}
                />
                <Label color="#333">Full</Label>
              </RadioWrapper>
              <Label color="#251A24"> <i className="fas fa-rupee-sign"></i>{price[1]} </Label>
            </RadioBoxDiv>}
          </PriceInfoBox>
          <QuantityPickerBox
            width={openCart ? "80px" : "0px"}
            display={openCart ? "flex" : "none"}

          >
            <Minus>
              <i
                className="fas fa-minus"
                onClick={quantityDecrement}
              ></i>
            </Minus>
            <Quantity>
              <input
                className="numberInput"
                type="text"
                name="quantity"
                value={amount}
                readOnly

              />
            </Quantity>
            <Plus>
              <i
                className="fas fa-plus"
                onClick={quantityIncrement}
              ></i>
            </Plus>
          </QuantityPickerBox>
        </AddItemBox>
      </MenuDisplayBox>

    </Container>
  )
}

export default Index
