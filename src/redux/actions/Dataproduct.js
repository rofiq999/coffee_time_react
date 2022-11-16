export function setDataProfile(type, value) {
  return {
    type: 'SET_DATA_PROFILE',
    inputType: type,
    value: value,
  };
}

export function setDataProduct(type, value) {
  return {
    type: 'SET_PRODUCT_DETAIL',
    inputType: type,
    value: value,
  };
}
