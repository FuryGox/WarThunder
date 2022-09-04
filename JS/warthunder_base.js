// Dynamic Navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header-bott");
    header.classList.toggle("sticky", scrollY > 0);
})



// Delay between two image of carousel
$(".carousel").attr("data-interval", "100");

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Display alert when click
function none_exists_content() {
    swal("404!", "Trang web hiện tại chưa có nội dung này", "error");
    return false;
}
// Display anytime click on a tag have href="#"
$(document).on("click","a[href='#']",function(){
    swal("404!", "Trang web hiện tại chưa có nội dung này", "error");
    return false;
});
