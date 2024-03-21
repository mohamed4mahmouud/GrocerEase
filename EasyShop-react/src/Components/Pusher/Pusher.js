import Pusher from 'pusher-js';
const PUSHER_APP_KEY = 'adfa0a0ad6fa21ba8178';
const PUSHER_APP_CLUSTER = 'eu';
const pusher = new Pusher(PUSHER_APP_KEY, {
    cluster: PUSHER_APP_CLUSTER,
    // Add any additional options here if needed
});

export default pusher;