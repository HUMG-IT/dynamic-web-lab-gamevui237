/**
 * Module xử lý logic tính toán và phân loại chỉ số BMI.
 *
 * Các chức năng chính:
 * - calculateBMI: Tính chỉ số BMI dựa trên cân nặng và chiều cao.
 * - classifyBMI: Phân loại chỉ số BMI thành các nhóm.
 */

/**
 * Tính chỉ số BMI
 *
 * Công thức:
 * BMI = weight (kg) / [height (m)]²
 * 
 * Kết quả được giới hạn ở hai chữ số thập phân.
 *
 * @function calculateBMI
 * @param {number} weight - Cân nặng của người dùng (đơn vị: kg).
 * @param {number} height - Chiều cao của người dùng (đơn vị: cm).
 * @returns {number} - Chỉ số BMI đã tính toán (giới hạn 2 chữ số thập phân).
 */
const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // Chuyển đổi chiều cao từ cm sang m
    const bmi = weight / (heightInMeters ** 2); // Tính BMI
    return parseFloat(bmi.toFixed(2)); // Giới hạn kết quả ở 2 chữ số thập phân
};

/**
 * Phân loại chỉ số BMI
 *
 * Dựa trên tiêu chuẩn:
 * - < 18.5: Gầy
 * - 18.5 - 24.9: Bình thường
 * - 25 - 29.9: Thừa cân
 * - >= 30: Béo phì
 *
 * @function classifyBMI
 * @param {number} bmi - Chỉ số BMI cần phân loại.
 * @returns {string} - Phân loại BMI (Gầy, Bình thường, Thừa cân, Béo phì).
 */
const classifyBMI = (bmi) => {
    if (bmi < 18.5) {
        return 'Gầy';
    } else if (bmi < 25) {
        return 'Bình thường';
    } else if (bmi < 30) {
        return 'Thừa cân';
    } else {
        return 'Béo phì';
    }
};

module.exports = { calculateBMI, classifyBMI };
