document.querySelectorAll(".copy-command").forEach((button) => {
  button.addEventListener("click", async () => {
    const command = button.dataset.command;
    const container = button.closest(".command-block");
    const status = container.querySelector(".copy-status");

    try {
      await navigator.clipboard.writeText(command);
      status.textContent = "Command copied.";
    } catch {
      status.textContent = "Copying failed. Select the command manually.";
    }
  });
});