function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
  
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
      return true;
    }
    return false;
  }
  
  console.log(checkForSpam('Latest SPAM offers!')); 
  console.log(checkForSpam('Huge SALE discounts!')); 
  console.log(checkForSpam('Your order has been shipped.')); 
  