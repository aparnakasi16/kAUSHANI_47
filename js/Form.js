class Form {
  constructor() {
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    
  }

  

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    

  
  }
  
  


}





