const elements = [1,2,3,4,5];

elements.forEach(hamada => {
  console.log(hamada + 100);
});

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
}


function myForEach(array, cb){
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    cb(element);
  }
}

function handleArrayValues(element){
  console.log(element);
}


myForEach(elements, handleArrayValues)
