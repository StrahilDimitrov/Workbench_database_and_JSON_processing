fetch("computerInformation.json")
    .then(response => response.json())
    .then(product => {
        let placeholder = document.getElementById('bodyT');
        let out = "";
        let counter = 1;

        for (const element of product) {

            if (counter % 2 === 0) {
                out += `<tr id="color">
            <td><strong>${element.brand}</strong></td>
            <td>${element.model}</td>
            <td>${element.proccessor}</td>
            <td>${element.RAM}</td>
            <td>${element.SSD}</td>
        </tr>`
            }
            else {
                out += `<tr>
            <td><strong>${element.brand}</strong></td>
            <td>${element.model}</td>
            <td>${element.proccessor}</td>
            <td>${element.RAM}</td>
            <td>${element.SSD}</td>
        </tr>`
            }

            counter++;
        }

        placeholder.innerHTML = out;
    })