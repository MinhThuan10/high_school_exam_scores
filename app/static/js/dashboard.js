document.addEventListener("DOMContentLoaded", () => {

    const labels = ["0-2", "2-5", "5-8", "8-10"];

    const createChart = (ctx, title, data) => {
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Số lượng học sinh",
                        data: data,
                        backgroundColor: "rgba(75, 192, 192, 0.5)"
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top"
                    },
                    title: {
                        display: true,
                        text: title
                    }
                }
            }
        });
    };
    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "block"; 
    fetch(`/api/dashboard`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            createChart(document.getElementById("chartToan"), "Điểm môn Toán", data.toan);
            createChart(document.getElementById("chartVan"), "Điểm môn Ngữ Văn", data.ngu_van);
            createChart(document.getElementById("chartNgoaiNgu"), "Điểm môn Ngoại Ngữ", data.ngoai_ngu);
            createChart(document.getElementById("chartVatLy"), "Điểm môn Vật Lý", data.vat_li);
            createChart(document.getElementById("chartHoa"), "Điểm môn Hóa Học", data.hoa_hoc);
            createChart(document.getElementById("chartSinh"), "Điểm môn Sinh Học", data.sinh_hoc);
            createChart(document.getElementById("chartSu"), "Điểm môn Lịch sử", data.lich_su);
            createChart(document.getElementById("chartDia"), "Điểm môn Địa Lí", data.dia_li);
            createChart(document.getElementById("chartCongDan"), "Điểm môn Giáo Dục Công Dân", data.gdcd);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        loadingElement.style.display = "none";
    });

});
