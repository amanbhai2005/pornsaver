document.addEventListener("DOMContentLoaded", loadResources);
        
        function addResource() {
            let titleInput = document.getElementById("titleInput");
            let linkInput = document.getElementById("linkInput");
            let title = titleInput.value.trim();
            let url = linkInput.value.trim();
            
            if (title === "" || url === "") return;
            
            let resources = JSON.parse(localStorage.getItem("resources")) || [];
            resources.push({ title, url });
            localStorage.setItem("resources", JSON.stringify(resources));
            
            displayResources();
            titleInput.value = "";
            linkInput.value = "";
        }
        
        function loadResources() {
            displayResources();
        }
        
        function displayResources() {
            let list = document.getElementById("resourceList");
            list.innerHTML = "";
            let resources = JSON.parse(localStorage.getItem("resources")) || [];
            
            resources.forEach((resource, index) => {
                let listItem = document.createElement("li");
                let link = document.createElement("a");
                link.href = resource.url;
                link.target = "_blank";
                link.innerText = resource.title;
                link.style.textDecoration = "none";
                link.style.color = "#333";
                
                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.onclick = () => deleteResource(index);
                
                listItem.appendChild(link);
                listItem.appendChild(deleteBtn);
                list.appendChild(listItem);
            });
        }
        
        function deleteResource(index) {
            let resources = JSON.parse(localStorage.getItem("resources")) || [];
            resources.splice(index, 1);
            localStorage.setItem("resources", JSON.stringify(resources));
            displayResources();
        }
        function updateIndiaClock() {
            const now = new Date();
      
            const timeOptions = {
              timeZone: 'Asia/Kolkata',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            };
      
            const dateOptions = {
              timeZone: 'Asia/Kolkata',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            };
      
            const indiaTime = now.toLocaleTimeString('en-IN', timeOptions);
            const indiaDate = now.toLocaleDateString('en-IN', dateOptions);
      
            document.getElementById('india-time').textContent = indiaTime;
            document.getElementById('india-date').textContent = indiaDate;
          }
      
          updateIndiaClock();
          setInterval(updateIndiaClock, 1000);
          
