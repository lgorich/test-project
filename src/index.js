import { message } from './app/message';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import 'particles.js';

console.log(message('Hi there'));

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'src/assets/particles.json');
