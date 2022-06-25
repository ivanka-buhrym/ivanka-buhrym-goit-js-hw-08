
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 19231868, width: 640
});
if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
player.on('timeupdate', throttle(data => {
 localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000),
);


