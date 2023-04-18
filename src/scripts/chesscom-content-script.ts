import { getGameCount, setGameCount } from "../storage/storage";

const disableAllPlayButtons = async () => {
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

  const randomCount = Math.floor(Math.random() * 5);
  await setGameCount(randomCount);

  const count = await getGameCount();
  console.log(`Game count = ${count}`);
};

disableAllPlayButtons();
