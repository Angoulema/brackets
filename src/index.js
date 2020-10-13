module.exports = function check(str, bracketsConfig) {
  // your solution
  let sequence = bracketsConfig.reduce(
    (result, element) => result.concat(element),
      []
      );
      console.log(sequence);
    
      let openingBrackets = [];
      let closingBrackets = [];
    
      for (let i = 0; i < sequence.length; i++) {
        if (i % 2 === 0) {
          openingBrackets = openingBrackets.concat(sequence[i]); // записываем открывающие скобки последовательности
        } else {
          closingBrackets = closingBrackets.concat(sequence[i]); // записываем закрывающие скобки последовательности
        }
      };
      console.log('opening:', openingBrackets);
      console.log('closing:', closingBrackets);
      console.log(str);
    
      let character; // переменная для символа подаваемой строки
      let matchingOpeningBracket;
      let stack = []; // переменная для стека
    
      for (i = 0; i < str.length; i++) {
        character = str[i];
    
        if (closingBrackets.indexOf(character) > -1) { //если в строке есть закрывающая скобка
           /*let closingOne = closingBrackets[closingBrackets.indexOf(character)];
          console.log(closingOne);
          
          console.log('что попало в стек:', stack); */
          matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(character)]; //у закрывающих и открыающих совпадают индексы в своих массивах
          // поэтому если есть закрывающая, то переменной присваивается значение аналогичной открывающей
          
          console.log('openingOne:', matchingOpeningBracket);
          console.log(stack.length);
          if (stack.length === 0 || (stack.pop() != matchingOpeningBracket)) { 
            // если стек пустой или верхний элемент не совпадает с записанной открывающей скобкой
            console.log('false');
            return false;
            
          }
        } else {
          stack.push(character); 
          console.log(stack);
        }
      }
      console.log (stack.length === 0);
      return (stack.length === 0);
    
      };
    


