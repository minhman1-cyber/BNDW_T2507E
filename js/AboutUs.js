const items = document.querySelectorAll(".accordion-item");
const imageBox = document.getElementById("imageBox");

items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const symbol = header.querySelector("span");

    header.addEventListener("click", () => {
        // Đóng tất cả accordion khác
        items.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".accordion-header span").textContent = "+";
            }
        });

        // Toggle accordion hiện tại
        item.classList.toggle("active");
        symbol.textContent = item.classList.contains("active") ? "−" : "+";

        // Cập nhật chiều cao hình ảnh theo nội dung đang mở
        let baseHeight = 500;
        let extraHeight = 0;
        items.forEach(i => {
            if (i.classList.contains("active")) {
                extraHeight += i.querySelector(".accordion-content").scrollHeight;
            }
        });
        imageBox.style.height = baseHeight + extraHeight + "px";
    });
});


// Khởi tạo Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true, // lặp vô hạn
  autoplay: {
    delay: 4000, // 4 giây tự chạy
    disableOnInteraction: false, // vẫn auto chạy sau khi user click
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // cho phép click vào dấu chấm
  },
});

const instaSwiper = new Swiper('.instagram-carousel', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
