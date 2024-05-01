document.addEventListener('DOMContentLoaded', function(){
    const selectElement = document.getElementById('theme');
    const logo = document.getElementById('logo');

    selectElement.addEventListener('change', function(){
        const selectedValue = this.value;
        if (selectedValue == "dark") {
            document.body.classList.add("dark");
            logo.setAttribute("src", "byui-logo_white.png");
        } else {
            document.body.classList.remove("dark");
            logo.setAttribute("src", "byui-logo_blue.webp");
        }
    })
});