const initialState = {
  addres: '',
  phone_number: '',
  display_name: '',
};

const initialStateProduct = {
  price: '',
  product_name: '',
  size: '',
  image: '',
  total: '',
  //   deliveryName: '',
  //   deliveryPrice: '',
};

const getDataProfile = (prevState = initialState, action) => {
  // lakukan pengondisian untuk masing masing action
  if (action.type === 'SET_DATA_PROFILE') {
    return {
      ...prevState,
      [action.inputType]: action.value,
    };
  }
  return prevState;
};

const getProduct = (prevState = initialStateProduct, action) => {
  // lakukan pengondisian untuk masing masing action
  if (action.type === 'SET_PRODUCT_DETAIL') {
    return {
      ...prevState,
      [action.inputType]: action.value,
    };
  }
  return prevState;
};

export { getDataProfile, getProduct };
