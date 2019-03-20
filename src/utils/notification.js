import i18n from './../utils/i18n';

export const openNotification = (type, message, notification) => {
  let backgroundColor, border;
  switch (type) {
    case 'success':
      backgroundColor = '#f6ffed';
      border = '1px solid #b7eb8f';
      break;
    case 'error':
      backgroundColor = '#fff1f0';
      border = '1px solid #ffa39e';
      break;
    default:
      backgroundColor = '';
      border = '';
      break;
  }
  notification[type]({
    message: i18n.t(type),
    description: message,
    style: {
      backgroundColor: backgroundColor,
      border: border
    }
  });
};

export const AUDIO_SUCCESS = require('../assets/audio/success_tone.m4a');
export const AUDIO_ERROR = require('../assets/audio/alert_error.m4a');
export const AUDIO_WARNING = require('../assets/audio/attention.m4a');
export const AUDIO_DUPLICATE = require('../assets/audio/alarm.m4a');

export const speaker = (id) => {
  switch (id) {
    case 'scan-success':
      return document.getElementById('scan-success').play();
    case 'scan-warning':
      return document.getElementById('scan-warning').play();
    case 'scan-error':
      return document.getElementById('scan-error').play();
    case 'scan-duplicate':
      return document.getElementById('scan-duplicate').play();
    default:
      return;
  }
}

export const stopSpeaker = (id) => {
  if (!id) return null;

  document.getElementById(id).pause();
}