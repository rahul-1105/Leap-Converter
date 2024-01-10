const convert = document.querySelector(".convert-dropdown");
        const tools = document.querySelector(".tools-dropdown");

        function convertDropdown() {
            convert.classList.toggle("active");
            tools.classList.remove("active");
        }

        function toolsDropdown() {
            tools.classList.toggle("active");
            convert.classList.remove("active");
        }

        function hideDropdown() {
            convert.classList.remove("active");
            convert.classList.remove("active");
        }