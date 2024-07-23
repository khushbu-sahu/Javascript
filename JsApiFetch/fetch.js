let form = document.getElementById("form");

let editMode = false;
let dataId = null;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = document.getElementById("input").value;
    let email = document.getElementById("email").value;
    let data = { name, email };

    try {
        let response;
        if (editMode && dataId) {
            response = await fetch(
                `https://66912c1f26c2a69f6e8ec117.mockapi.io/aniket/${dataId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
        } else {
            response = await fetch("https://66912c1f26c2a69f6e8ec117.mockapi.io/aniket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
        }

        const result = await response.json();
        console.log("Result:", result);

        document.getElementById("response").innerHTML = `<p>Data submitted successfully!</p>`;
        document.getElementById("data").click();
        form.reset();
        editMode = false;
        dataId = null;

    } catch (error) {
        document.getElementById("response").innerHTML = `<p>There was an error submitting your data.</p>`;
    }
});

let abhi = document.getElementById("ani");

document.getElementById("data").addEventListener("click", async () => {
    console.log('I am fetch');
    let url = "https://66912c1f26c2a69f6e8ec117.mockapi.io/aniket";
    let link = await fetch(url);
    let convertData = await link.json();
    abhi.innerHTML = "";
    convertData.forEach(element => {
        let div = document.createElement('div');
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        p1.innerHTML = `${element.id}`;
        p2.innerHTML = `${element.name}`;
        p3.innerHTML = `${element.email}`;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        div.appendChild(deleteButton);
        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        div.appendChild(editButton);

        abhi.appendChild(div);

        deleteButton.addEventListener("click", () => deleteData(element.id));
        editButton.addEventListener("click", () => editData(element));
    });
});

async function deleteData(dataId) {
    try {
        const res = await fetch(
            `https://66912c1f26c2a69f6e8ec117.mockapi.io/aniket/${dataId}`,
            {
                method: "DELETE",
            }
        );
        const result2 = await res.json();
        console.log("Result:", result2);
        document.getElementById("data").click();
    } catch (error) {
        console.log(error);
    }
}

function editData(element) {
    document.getElementById("input").value = element.name;
    document.getElementById("email").value = element.email;
    editMode = true;
    dataId = element.id;
}



