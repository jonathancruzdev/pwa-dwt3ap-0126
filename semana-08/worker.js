const tareaPesada = () => {
    let n = 0;
  for (let i = 0; i < 1e10; i++) {
    n = n + i;
  }

  postMessage(n);
}
tareaPesada();