document.addEventListener('scroll',() => {
    const header = document.queryselector("header");
    if( window.scrollY > 0){
      header.ClassList.add("scrolled");
      console.log("scrolled");
  
    }
    else{
      header.ClassList.remove("scrolled");
    }
  })