const productImageInput = document.getElementById("productImage");
const imagePreview = document.getElementById("imagePreview");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

productImageInput.addEventListener("change", function () {
  imagePreview.innerHTML = "";
  Array.from(this.files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.classList.remove("hidden");
      });
      imagePreview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

const categorySelect = document.getElementById("category");
const otherCategory = document.getElementById("otherCategory");

categorySelect.addEventListener("change", function () {
  if (this.value === "Other") {
    otherCategory.classList.remove("hidden");
    otherCategory.required = true;
  } else {
    otherCategory.classList.add("hidden");
    otherCategory.required = false;
    otherCategory.value = "";
  }
});
