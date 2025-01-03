const sidebar = document.getElementById('sidebar')
const docktoright  = document.getElementById('docktoright');
const hidesidebar = () =>{
    sidebar.style.border = '2px solid orange';
}
docktoright.addEventListener('click', hidesidebar)

