module.exports = function toReadable (number) {
    numbers  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
    let getDozens = (number) => {
    switch(number) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
      }
      
      let a = '';
      let b = '';
      
      if (Math.floor(number / 10) === 1) {
          a = numbers[number % 10]
        b = 'teen'
          switch(number % 10) {
          case 3: a = 'thir'; break;
          case 5: a = 'fif'; break;
          case 8: a = 'eigh'; break;
        }
       return a + b
      }
      
      b = 'ty'
      a = numbers[Math.floor(number / 10)];
      switch(Math.floor(number / 10)) {
        case 2: a = 'twen'; break;
       case 3: a = 'thir'; break;
       case 4: a = 'for'; break;
       case 5: a = 'fif'; break;
       case 8: a = 'eigh'; break;
      }
      
      let c = ' ' + numbers[number % 10];
      if (number % 10 === 0) c = ''

      if (Math.floor(number / 10) === 0) {
          a = ''
          b = ''
      }
      
      return a + b + c;
    }
    
    if (number / 10 < 1) return numbers[number];
      if (number / 100 < 1) {
        return getDozens(number);
    }
    
    let hundred = numbers[Math.floor(number / 100)] + ' hundred'
    if (number % 100 === 0) return hundred
    return hundred + ' ' + getDozens(number % 100).trim()
}
