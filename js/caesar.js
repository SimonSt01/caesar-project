const validator = (input) => {
    if (typeof input.value !== "string") {
      return alert("Podana wartość nie jest stringiem!");
    } else if (input.value === "") {
      return alert("Wpisz hasło do zaszyfrowania!");
    } else if (input.value.match(/[żźćńółęąśŻŹĆĄŚĘŁÓŃ]/)) {
      return alert("Nie używaj polskich znaków !!!");
    } else if (input.length > 1500) {
      return alert("Przekroczona maksymalna liczba znaków (1500) !!!");
    }
  };
  
  const caesar13 = (e, input) => {
    e.preventDefault();
    validator(input);
  
    const cipherResult = document.querySelector("p.cipher-result");
    const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const givenStrArr = [...input.value];
    cipherResult.innerHTML = "";
  
    givenStrArr.map((el) => {
      if (el.match(/[0-9]/)) {
        cipherResult.innerHTML += el;
      } else if (letters.includes(el) || letters.includes(el.toUpperCase())) {
        if (el !== el.toUpperCase()) {
          cipherResult.innerHTML += letters[(letters.indexOf(el.toUpperCase()) + 13) % letters.length].toLowerCase();
        } else {
          cipherResult.innerHTML += letters[(letters.indexOf(el) + 13) % letters.length];
        }
      }
    });
  
    input.value = "";
  };
  
  export {caesar13};