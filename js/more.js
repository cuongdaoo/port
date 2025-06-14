<script>
  window.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("toggleBtn");
    const fullText = document.querySelector("#desc .full");
    const shortText = document.querySelector("#desc .short");

    btn.addEventListener("click", function () {
      const isHidden = fullText.style.display === "none" || fullText.style.display === "";
      fullText.style.display = isHidden ? "inline" : "none";
      btn.textContent = isHidden ? "Less" : "More";
    });
  });
</script>
