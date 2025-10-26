// Dữ liệu linh kiện và câu hỏi
const device_data = {
  "Điện trở": {
    cong_dung: "Hạn chế dòng điện, chia điện áp trong mạch.",
    nguyen_ly: "Hoạt động theo định luật Ôm: U = I × R.",
    quiz: [
      {
        question: "Đơn vị đo của điện trở là gì?",
        options: ["Vôn", "Ampe", "Ôm", "Oát"],
        answer: "Ôm"
      },
      {
        question: "Ký hiệu của điện trở trong mạch điện là:",
        options: ["R", "C", "L", "V"],
        answer: "R"
      }
    ]
  },

  "Tụ điện": {
    cong_dung: "Tích trữ năng lượng điện dưới dạng điện trường.",
    nguyen_ly: "Tụ điện nạp và phóng điện khi có sự thay đổi điện áp.",
    quiz: [
      {
        question: "Tụ điện có đơn vị đo là gì?",
        options: ["Henry (H)", "Farad (F)", "Ohm (Ω)", "Volt (V)"],
        answer: "Farad (F)"
      },
      {
        question: "Công dụng chính của tụ điện là:",
        options: ["Tạo từ trường", "Tích trữ điện tích", "Giới hạn dòng", "Đo điện áp"],
        answer: "Tích trữ điện tích"
      }
    ]
  },

  "Cuộn cảm": {
    cong_dung: "Tạo ra từ trường khi có dòng điện chạy qua.",
    nguyen_ly: "Khi dòng điện biến thiên, cuộn cảm sinh ra suất điện động cảm ứng.",
    quiz: [
      {
        question: "Cuộn cảm có đơn vị đo là:",
        options: ["Farad (F)", "Ohm (Ω)", "Henry (H)", "Volt (V)"],
        answer: "Henry (H)"
      },
      {
        question: "Công dụng chính của cuộn cảm là gì?",
        options: ["Chống nhiễu, lọc dòng", "Phát sáng", "Làm mát", "Chuyển điện năng thành cơ năng"],
        answer: "Chống nhiễu, lọc dòng"
      }
    ]
  }
};
