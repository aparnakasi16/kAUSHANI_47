class Round1 {
  constructor() {

    this.hint = createElement("h3");
    this.input = createInput("").attribute("placeholder","Enter Your Answer");
    this.button = createButton("Submit");
    this.message1 = createElement("h4");
    this.message2 = createElement("h4");
    this.card = createElement("h1")
    this.card2 = createElement("h1")
    this.card3 = createElement("h1")
    this.card4 = createElement("h1")
    this.card5 = createElement("h1")
  }


  hide(){
    this.input.hide();
    this.button.hide();
    this.message1.hide();
    this.message2.hide();
  }

   play(){
    image(bg4Image,0,0,width,height);
    //console.log("play is working);
    
  }
     
   
  display(){
    this.hint.html("Hint:- A Life Saver.");
    this.hint.position(150,80);
    this.input.position(150,230);
    this.button.position(290,300);
    this.input.class("customInput");
    this.button.class("customButton");
    this.hint.class("greeting");
    this.message1.class("greeting");
    this.message2.class("greeting");

    this.card.position(600,100);
    this.card.html("N")
    this.card.class("thecard");

    this.card2.position(700,100);
    this.card2.html("D")
    this.card2.class("thecard");

    this.card3.position(800,100);
    this.card3.html("O")
    this.card3.class("thecard");

    this.card4.position(900,100);
    this.card4.html("R")
    this.card4.class("thecard");

    this.card5.position(1000,100);
    this.card5.html("O")
    this.card5.class("thecard");

    this.button.mousePressed(()=>{
    
    

      if(Answer1 === this.input.value() ){
        score = score + 1;
        this.input.hide();
        this.button.hide();
        this.hint.hide();
        round2.display();
        this.card.hide();
        this.card2.hide()
        this.card3.hide()
        this.card4.hide()
        this.card5.hide()
      }

      if(Answer1!== this.input.value()){
        lifee -=1
        //heart3.changeAnimation("twoHearts")
      }

      if(lifee === 2)
      {
        heart3.changeAnimation("twoHearts") 
      }

      if(lifee ===1){
        heart3.changeAnimation("oneHeart") 
      
      }
      // else{
      //   score = 0;
      //   this.message1.html("Correct Answer :- DONOR");
      //   this.message1.position(350,350);
      //   this.message2.html("Better Luck Next Time");
      //   this.message2.position(400,400);
      //   this.input.hide();
      //   this.button.hide();
      //   this.hint.hide();
        
        

      // }

    })
  }
}
