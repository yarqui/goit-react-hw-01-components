import { Image } from './Avatar.styled';

export const Avatar = ({ imgURL, name, imgWidth }) => (
  <Image src={imgURL} alt={name} width={imgWidth}></Image>
);
