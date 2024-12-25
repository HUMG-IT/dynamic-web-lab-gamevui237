// Đảm bảo các script chỉ chạy sau khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', () => {
    // Form lưu tên
    const nameForm = document.getElementById('nameForm');
    if (nameForm) {
        nameForm.addEventListener('submit', async function (e) {
            // Ngăn hành vi mặc định của form (ngăn tải lại trang)
            e.preventDefault();

            // Lấy giá trị nhập từ trường input có id là 'name'
            const nameInput = document.getElementById('name');
            if (!nameInput) {
                console.error("Phần tử input 'name' không tồn tại!");
                return;
            }
            const name = nameInput.value;

            try {
                // Gửi yêu cầu POST đến server tại route '/submit' với dữ liệu JSON
                const response = await fetch('/api/v1/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name }),
                });

                // Kiểm tra phản hồi và xử lý lỗi nếu có
                if (!response.ok) {
                    throw new Error('Lỗi từ server khi gửi dữ liệu lưu tên.');
                }

                const data = await response.json();

                // Hiển thị thông điệp trả về từ server
                const nameResponse = document.getElementById('nameResponse');
                if (nameResponse) {
                    nameResponse.textContent = `${data.message}. Danh sách tên: ${data.names.join(', ')}`;
                } else {
                    console.error("Phần tử 'nameResponse' không tồn tại!");
                }
            } catch (error) {
                console.error('Lỗi khi gửi dữ liệu lưu tên:', error.message);
            }
        });
    } else {
        console.error("Form 'nameForm' không tồn tại!");
    }

    // Form tính BMI
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', async function (e) {
            // Ngăn hành vi mặc định của form (ngăn tải lại trang)
            e.preventDefault();

            // Lấy giá trị chiều cao và cân nặng
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');

            if (!heightInput || !weightInput) {
                console.error("Phần tử 'height' hoặc 'weight' không tồn tại!");
                return;
            }

            const height = parseFloat(heightInput.value);
            const weight = parseFloat(weightInput.value);

            try {
                // Gửi yêu cầu POST đến server tại route '/bmi' với dữ liệu JSON
                const response = await fetch('/api/v1/bmi', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ height, weight }),
                });

                // Kiểm tra phản hồi và xử lý lỗi nếu có
                if (!response.ok) {
                    throw new Error('Lỗi từ server khi gửi dữ liệu BMI.');
                }

                const data = await response.json();

                // Hiển thị thông điệp trả về từ server
                const bmiResult = document.getElementById('bmiResult');
                if (bmiResult) {
                    bmiResult.textContent = `BMI của bạn là: ${data.bmi}, Phân loại: ${data.classification}`;
                } else {
                    console.error("Phần tử 'bmiResult' không tồn tại!");
                }
            } catch (error) {
                console.error('Lỗi khi gửi dữ liệu BMI:', error.message);
            }
        });
    } else {
        console.error("Form 'bmiForm' không tồn tại!");
    }
});
