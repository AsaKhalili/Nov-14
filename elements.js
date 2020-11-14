function createATitle(title){
  var title_ = createElement('p',{class: 'task-box-title'},title);

  return title_;
}

function createListofTasks(){
  var cards_box = createElement('div',{class:'cards-box'},);
  var tasks_list = createElement('ul',{class:'list-of-cards'},);

  cards_box.appendChild(tasks_list);

  return cards_box;
}

function createAddCardBtn(){
  var btn_div = createElement('div',{class:'add-card-btn'},);
  var add_card_btn = createElement('button',{id:'card-btn'},'Add a Card...');

  btn_div.appendChild(add_card_btn);

  return btn_div;
}

function createNewTaskBox(title){
  var box = createElement('div', {class: 'task-box'},);
  var box_title = createATitle(title);
  var cards_list = createListofTasks();
  var add_button = createAddCardBtn();

  box.appendChild(box_title);
  box.appendChild(cards_list);
  box.appendChild(add_button);

  return box;

}






// what happens when button is pressed: 
function createAddNewListCTA(){
  //variables for add button
  var container_add_btn = createElement('div',{class: 'add-task-box-btn show'},);
  var btn = createElement('button', {id: 'task-btn'}, 'Add a List');
  //variables for input box 
  var container_input = createElement('div', {class: 'add-new-list hide'},);    
  var input_space = createElement('input', {type: 'text', class:'btn-input-title', placeholder:'Enter Title...'},);
  var add_btn_input = createElement('button', {id: 'Add-list'},'Add List');
  var abort_btn_input = createElement('button', {id: 'abort'},);
  var icon = createElement('i', {class: 'fas fa-times'},);

  container_add_btn.appendChild(btn);

  abort_btn_input.appendChild(icon);
  container_input.appendChild(input_space);
  container_input.appendChild(add_btn_input);
  container_input.appendChild(abort_btn_input);
    
  var page = createElement('section',{class: 'content'},);
  

  page.appendChild(container_add_btn);
  page.appendChild(container_input);

  //button1 : Add List 
  btn.addEventListener('click', function(){
    container_add_btn.classList.remove('show');
    container_add_btn.classList.add('hide');

    container_input.classList.remove('hide');
    container_input.classList.add('show');

    input_space.focus();
  });

  //button2 : Title
  //a New list is gonna get made 
  add_btn_input.addEventListener('click',function(){
    var new_list = createNewTaskBox(input_space.value);
    var position = document.querySelector('.add-new-list'); 
    position.before(new_list);

    input_space.value = '';
    input_space.focus();
  });

  //This also works for when enter is pressed:
  input_space.addEventListener('keyup', function(e){
    if (e.keyCode === 13){
      var new_list = createNewTaskBox(input_space.value);
      var position = document.querySelector('.add-new-list'); 
      position.before(new_list);

      input_space.value = '';
      input_space.focus();
    }
  });

  //button3 : Exit 
  //no new lists 
  abort_btn_input.addEventListener('click', function(){
    container_input.classList.remove('show');
    container_input.classList.add('hide');
    input_space.value = '';

    container_add_btn.classList.remove('hide');
    container_add_btn.classList.add('show');

    var list_of_elements = document.querySelectorAll('.task-box');
    var last_one = list_of_elements[list_of_elements.length - 1];
    last_one.after(container_add_btn);

  });







  return page;

}

//what happens when title is entered
//what happens when action is aborted 

