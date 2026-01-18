import './ui.js';
import './install.js';
import './launcher.js';
import './news.js';
import './mods.js';
import './players.js';
import './chat.js';
import './settings.js';

// Discord notification functions
window.closeDiscordNotification = function() {
  const notification = document.getElementById('discordNotification');
  if (notification) {
    notification.classList.add('hidden');
    setTimeout(() => {
      notification.style.display = 'none';
    }, 300);
  }
};

// Show notification after a delay
document.addEventListener('DOMContentLoaded', () => {
  const notification = document.getElementById('discordNotification');
  if (notification) {
    // Check if user has previously dismissed the notification
    const dismissed = localStorage.getItem('discordNotificationDismissed');
    if (!dismissed) {
      setTimeout(() => {
        notification.style.display = 'flex';
      }, 3000); // Show after 3 seconds
    } else {
      notification.style.display = 'none';
    }
  }
});

// Remember when user closes notification
const originalClose = window.closeDiscordNotification;
window.closeDiscordNotification = function() {
  localStorage.setItem('discordNotificationDismissed', 'true');
  originalClose();
};