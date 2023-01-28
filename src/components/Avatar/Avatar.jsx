// import user from 'user.json';
import { IMG_SIZE } from 'config/config.js';

export const Avatar = ({ imgURL, alt }) => (
  <img src={imgURL} alt={alt} width={IMG_SIZE}></img>
);
