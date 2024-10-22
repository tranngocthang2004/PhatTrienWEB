document.addEventListener("DOMContentLoaded", function () {
    // Populate the day and year options dynamically
    const daySelect = document.getElementById('day');
    const monthSelect= document.getElementById('month');
    const yearSelect = document.getElementById('year');
    let currentYear = new Date().getFullYear();

    // Generate days
    for (let i = 1; i <= 31; i++) {
        daySelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
    for(let i = 1; i <= 12;i++){
        monthSelect.innerHTML+=`<option value="${i}">${i}</option>`;
    }
    // Generate years
    for (let i = currentYear; i >= 1900; i--) {
        yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }

    // Handle form submission
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Ngăn không cho form gửi đi

        // Lấy giá trị các trường
        const ho = document.getElementById('ho').value;
        const ten = document.getElementById('ten').value;
        const day = document.getElementById('day').value;
        const month = document.getElementById('month').value;
        const year = document.getElementById('year').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Kiểm tra dữ liệu đầu vào
        if (ho === "" || ten === "" || day === "" || month === "" || year === "" || !gender) {
            alert("Vui lòng điền đầy đủ thông tin.");
        } else {
            // Hiển thị thông báo
            const result = document.getElementById('result');
            result.innerHTML = `Xin chào ${ho} ${ten}, sinh ngày ${day}/${month}/${year}, giới tính ${gender === "male" ? "Nam" : "Nữ"}, đã đăng ký thành công!`;
        }
    });
});
