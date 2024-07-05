function editElement(firs,second,replacer) {
  
  const el = firs.textContent;
  const reg = new RegExp(second,'g');
  const res = el.replace(reg,replacer);
  firs.textContent = res

  console.log(res);
}
