const networkRequest = () => {
    setTimeout(() => {
      console.log('Async Code');
    }, 2000);
  };
  console.log('Hello World');
  networkRequest();
  console.log('The End');

  //it means it does not wait for the another one it will do on time but in synchronous one completes another method if one method not completes then remaining methods waiting for theat one.