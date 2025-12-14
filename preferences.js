document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pref-btn");
  const panels = document.querySelectorAll(".pref-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 버튼 active 처리
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // 패널 show 처리
      const targetId = btn.dataset.target;
      panels.forEach((p) => p.classList.remove("show"));
      document.getElementById(targetId).classList.add("show");
    });
  });
});
