import styled from 'styled-components';

export const GalleryItem = styled.li`
  overflow: hidden;
  flex-basis: calc((100% - 15px * 3) / 4);
  border-radius: 5px;
  cursor: zoom-in;
  transition: transform linear 250ms;
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
