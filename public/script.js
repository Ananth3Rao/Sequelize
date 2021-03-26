async function getDiningHalls() {
    const response = await fetch("/api/dining");
    const data = await response.json();
    diningHalls = data.data;
    console.log(diningHalls);
    const halls = document.querySelector(".halls")
    const html = diningHalls.map((hall) =>
    `<tr>
        <th> ${hall.hall_name} </th>
        <td> ${hall.hall_address}</td>
    </tr>`
    ).join("");
    halls.innerHTML = html;


}

getDiningHalls();