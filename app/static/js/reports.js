document.addEventListener("DOMContentLoaded", () => {
    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "block"; 
    fetch('/api/report')
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const tableBody = document.querySelector("#top10Table tbody");
            tableBody.innerHTML = ""; 

            data.students.forEach((student, index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${student.sbd}</td>
                    <td>${student.toan}</td>
                    <td>${student.vat_li}</td>
                    <td>${student.hoa_hoc}</td>
                    <td>${student.total_a.toFixed(2)}</td>
                `;

                tableBody.appendChild(row);
            });
        } else {
            console.error("Không thể lấy danh sách top 10 học sinh.");
        }
    })
    .catch(error => console.error('Error:', error))
    .finally(() => {
        loadingElement.style.display = "none";
    });
});

