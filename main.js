var array = [];
function Submit() {
    array.push(document.getElementById("text1").value);
    document.getElementById("names1").innerHTML = array;
}
function Show() {
    showarray = [];
    for(i = 0;i < array.length;i++) {
        showarray = showarray+"<h3>"+array[i]+"</h3>";
    }
    document.getElementById("paragraph1").innerHTML = showarray;
}
function Sort() {
    sortarray = [];
    array.sort();
    for(i = 0;i < array.length;i++) {
        sortarray = sortarray+"<h3>"+array[i]+"</h3>";
    }
    document.getElementById("sorted").innerHTML = sortarray;
}