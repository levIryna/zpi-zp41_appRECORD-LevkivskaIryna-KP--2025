const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];
  
  const applyDiscountAndAddId = (items) => {
    return items.map((item, index) => {
      return {
        ...item,
        id: index + 1, 
        price: item.price * 0.8 
      };
    });
  };
  
  const updatedFruits = applyDiscountAndAddId(fruits);
  console.log(updatedFruits);
  