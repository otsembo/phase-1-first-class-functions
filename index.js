function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction(){
  const namedFxn = () => {}
  return namedFxn;
}

function returnsAnAnonymousFunction(){
  return () => {

  };
}
