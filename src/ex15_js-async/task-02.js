const debounce = (fn, ms) => {
  let timeOut;
  return function Call(...arg) {
    const fnCall = () => {
      fn.apply(this, arg);
    };
    clearTimeout(timeOut);
    timeOut = setTimeout(fnCall, ms);
  };
};

let deb = function onChangeDebounced(search) {
  document.getElementById('resultDebounced').innerHTML = search.target.value;
};

deb = debounce(deb, 500);

document.getElementById('search-debounced').addEventListener('keyup', deb);

function onChangeRegular(search) {
  document.getElementById('resultRegular').innerHTML = search.target.value;
}

document.getElementById('search-regular').addEventListener('keyup', onChangeRegular);
