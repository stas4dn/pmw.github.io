function showDay(){
  const date = new Date();
  const dayOfTheWeek = date.getDay();
  
  let dayText = "";
  
  switch(dayOfTheWeek){
    case 1:
      dayText = "Psalm 91:1; He who dwells in the secret place of the Most High Shall abide under the shadow of the Almighty."
      break;
    case 2:
      dayText = "Isaiah 40:31; But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint"
      break;
    case 3:
      dayText = "Philippians 4:13; I can do all things through Christ who strengthens me"
      break;
    case 4:
      dayText = "Psalm 119:105; Your word is a lamp to my feet And a light to my path."
      break;
    case 5:
      dayText = "Psalm 16:11; You will show me the path of life; In Your presence is fullness of joy; At Your right hand are pleasures forevermore."
      break;
    case 6:
      dayText = "Psalm 46:10; Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth"
      break;
    case 0:
      dayText = "Romans 8:28; And we know that all things work together for good to those who love God, to those who are the called according to His purpose. "
      break;
  }
  
  let divText = document.querySelector('.message');
  
  divText.innerHTML = dayText;
}

showDay();