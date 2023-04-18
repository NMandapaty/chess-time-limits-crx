const disableAllPlayButtons = () => {
  const quickPlayLinks = document.querySelectorAll(
    'a[href*="play/online/new"]'
  );
  quickPlayLinks.forEach((link) => {
    // link.
  });

  const playButtons = document.querySelectorAll(
    'button[data-cy="new-game-index-play"]'
  );
  playButtons.forEach((button) => button.setAttribute("disabled", "true"));
};

alert("----------content script loaded----------")
disableAllPlayButtons();

export {};
