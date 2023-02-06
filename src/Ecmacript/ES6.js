/*const tabNames=['amen','aziz','hmida','abouda']
tabNames.reduce((acc,currentvalue)=>acc+currentvalue);
const findLongestWord = (words) => {
    let wordObjects = words.map(word => ({word, length: word.length}));
    let longest = wordObjects.reduce((a, b) => a.length > b.length ? a : b);
    return {word: longest.word, length: longest.length};
  };
  */
 const classe ={
niveau:'Twin6',nbr:15
 };

 const newclasse ={
  ...classe,
email:'aza@aza.com'
   };
  console.log(newclasse)