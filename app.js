

  let renderCard1 = event => {
      
      let content1 = $(".content1") 
      content1.empty()
      let cardCol1 = $("<div>").addClass("col m12")
      let card1 = $("<div>").addClass("card z-depth-3")
      let imgTag1 = $("<img>").addClass("materialboxed responsive-img").attr("src", "Assets/marketPlace.gif")
      card1.append(imgTag1);
      cardCol1.append(card1);
      content1.append(cardCol1);

  }
  let renderCard2 = event => {
      
      let content = $(".content2") 
      content.empty()
      let cardRow = $("<div>").addClass("row")
      let cardCol = $("<div>").addClass("col m12")
      let card = $("<div>").addClass("card card z-depth-3")
      let imgTag = $("<img>").addClass("materialboxed responsive-img").attr("src", "Assets/projectBoard.gif")
      card.append(imgTag);
      cardCol.append(card);
      content.append(cardCol);

  }
  let renderCard3 = event => {
      
      let content3 = $(".content3") 
      content3.empty()
      let cardCol3 = $("<div>").addClass("col m12")
      let card3 = $("<div>").addClass("card card z-depth-3")
      let imgTag3 = $("<img>").addClass("materialboxed responsive-img").attr("src", "Assets/goolgeBook.gif")
      card3.append(imgTag3);
      cardCol3.append(card3);
      content3.append(cardCol3);

  }
  let renderCard4 = event => {
      
      let content4 = $(".content4") 
      content4.empty()
      let cardCol4 = $("<div>").addClass("col m12")
      let card4 = $("<div>").addClass("card z-depth-3")
      let imgTag4 = $("<img>").addClass("materialboxed responsive-img").attr("src", "Assets/sapling.gif")
      card4.append(imgTag4);
      cardCol4.append(card4);
      content4.append(cardCol4);

  }


  $(document).on("ready", renderCard1())
  $(document).on("ready", renderCard2())
  $(document).on("ready", renderCard3())
  $(document).on("ready", renderCard4())

  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tap-target').tapTarget();
  });
       
        