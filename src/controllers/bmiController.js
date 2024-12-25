// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');

// Hàm getBMI xử lý yêu cầu từ client
const getBMI = (req, res) => {
    const { height, weight } = req.body; // Lấy chiều cao và cân nặng từ request body

    // Kiểm tra nếu dữ liệu không hợp lệ
    if (!height || !weight || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        return res.status(400).json({ error: 'Dữ liệu không hợp lệ. Vui lòng nhập chiều cao và cân nặng hợp lệ.' });
    }

    // Tính toán BMI
    const bmi = calculateBMI(weight, height);

    // Phân loại BMI
    const classification = classifyBMI(bmi);

    // Trả về kết quả JSON
    res.status(200).json({ bmi: bmi.toFixed(2), classification });
};

// Xuất hàm getBMI
HEAD

// Lưu ý: Tham khảo mã trong tệp nameController.js
// src/controllers/bmiController.js
const { calculateBMI, classifyBMI } = require('../models/bmi');

module.exports = { getBMI };
