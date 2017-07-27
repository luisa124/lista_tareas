var arr = [
  {
    "title": "delectus aut autem",
     "completed":false
  },
  {
    "title": "quis ut nam facilis et officia qui",
     "completed":false
  },
  {
    "title": "fugiat veniam minus",
       "completed":false
  },
  {
    "title": "et porro tempora",
       "completed":false
  },
  {
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
       "completed":false
  },
  {
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
       "completed":false
  },
  {
    "title": "illo expedita consequatur quia in",
       "completed":false
  },
  {
    "title": "quo adipisci enim quam ut ab",
       "completed":false
  },
  {
    "title": "molestiae perspiciatis ipsa",
       "completed":false
  },
  {
    "title": "illo est ratione doloremque quia maiores aut",
       "completed":false
  },   
];

var Tarea = function(title)
{
    this.title=title;
    this.completed=false;
}

var body = document.body;
for (var i =0; i < arr.length; i++){
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.innerHTML=arr[i].title;
    ul.appendChild(li);
    body.appendChild(ul);
}

var myNodelist = document.getElementsByTagName("li");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
    
}

var cerar = document.getElementsByClassName("cerar");
for (var i = 0; i < cerar.length; i++) {
  cerar[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  arr.push(new Tarea(inputValue));
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') 
  {
    alert(" te falta poner tarea!");
  } 
    else 
  {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "cerar";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < cerar.length; i++) {
    cerar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
