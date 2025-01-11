document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const regNumber = document.getElementById("regNumber").value;
    const messageDiv = document.getElementById("Message");
    messageDiv.textContent = "";
    if (regNumber) {
        fetch(`/search&regNumber=${regNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const scoreDetailsDiv = document.getElementById("scoreDetails");

                // Xóa nội dung cũ trong div
                scoreDetailsDiv.innerHTML = "";
            
                // Tạo nội dung mới từ dữ liệu trả về
                const student = data.student;
                const tableHTML = `
                    <h3>Detailed Scores</h3>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td><strong>Số báo danh</strong></td>
                                <td>${student.sbd}</td>
                            </tr>
                            <tr>
                                <td><strong>Toán</strong></td>
                                <td>${student.toan}</td>
                            </tr>
                            <tr>
                                <td><strong>Ngữ Văn</strong></td>
                                <td>${student.ngu_van}</td>
                            </tr>
                            <tr>
                                <td><strong>Ngoại Ngữ</strong></td>
                                <td>${student.ngoai_ngu}</td>
                            </tr>
                            <tr>
                                <td><strong>Vật Lý</strong></td>
                                <td>${student.vat_li}</td>
                            </tr>
                            <tr>
                                <td><strong>Hóa Học</strong></td>
                                <td>${student.hoa_hoc}</td>
                            </tr>
                            <tr>
                                <td><strong>Sinh Học</strong></td>
                                <td>${student.sinh_hoc}</td>
                            </tr>
                            <tr>
                                <td><strong>Mã Ngoại Ngữ</strong></td>
                                <td>${student.ma_ngoai_ngu}</td>
                            </tr>
                        </tbody>
                    </table>
                `;
            
                // Thêm nội dung mới vào div
                scoreDetailsDiv.innerHTML = tableHTML;
            }
            else {
                messageDiv.textContent += data.message
                document.getElementById("scoreDetails").textContent = "";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("scoreDetails").textContent = "Failed to fetch scores.";
        });
    }
    else {
        messageDiv.textContent += "Chưa nhập số báo danh"
    }
    
});