console.log("hello");
document.addEventListener("DOMContentLoaded", getTodos);
/*
function getTodos(){
   fetch("https://6825dedb397e48c91313f3d8.mockapi.io/tasks")
   //chuyen ve json
   .then((respone) => respone.json())
   //lay du liệu
   .then((data) => console.log(data))
   // In ra lỗi nếu có rồi
   .catch((err) => console.log(err));
}
   */

 async function getTodos(){
    try {
 const respone= await axios.get("https://6825dedb397e48c91313f3d8.mockapi.io/tasks")
   console.log(respone.data);
   

   respone.data.forEach((item)=> {
    //console.log(item.content + +" " + item.id);
    //tạo ra cái thẻ li
    const li = document.createElement("li");

     li.className = "todo-item";
     
    //format day
    const date = new Date(item.createdAt);
    const formatDate = `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
    // gán nội dung dzo
    li.innerHTML = `
                <div class="todo-content">
                    <input type="checkbox">

                    <div>
                        <span>${item.Content}</span>
                        <p>Create: ${formatDate}</p>
                    </div>

                </div>
                <div class="todo-actions">
                    <button class="pen">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="remove">
                    <i class="fa-solid fa-eraser"></i>
                    </button>
                </div>
            </li>`;
    // lấy ra danh sách ul
    const ul = document.querySelector(".todo-list");
    ul.appendChild(li);
   });
    
   






    }
    catch (err) {
        console.log(err);
    }
}
