const keyword = document.getElementById("search-input");
keyword.addEventListener("keyup", search);

function search() {
    const inputValue = keyword.value.toLowerCase();
    const list = document.getElementsByTagName("li");
    console.log(list);

    for(i=0;i<list.length;i++){
        if(list[i].innerHTML.toLowerCase().includes(inputValue)){
            list[i].style.display = "";
        }else{
            list[i].style.display = "none";
        }
    }
    // if (inputValue === "") {
    //     for (let i = 0; i < list.length; i++) {
    //         list[i].style.display = "block"; // or use an empty string if you prefer
    //     }
    // }


}
