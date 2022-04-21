import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrc = src.replace(".jpg", ".avif");
  const avifSrc2x = src.replace(".jpg", "@2x.avif");
  const avifSrc3x = src.replace(".jpg", "@3x.avif");

  const jpgSrc = src.replace(".jpg", ".jpg");
  const jpgSrc2x = src.replace(".jpg", "@2x.jpg");
  const jpgSrc3x = src.replace(".jpg", "@3x.jpg");

  const labels = tags.toString();

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`${avifSrc} 1, ${avifSrc2x} 2, ${avifSrc3x} 3`}
          />
          <source
            type="image/jpg"
            srcSet={`${jpgSrc} 1, ${jpgSrc2x} 2, ${jpgSrc3x} 3`}
          />
          <Image src={src} alt={`Photo in grid with tags: ${labels}`} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Tag = styled.li`
  display: inline;
  margin-right: 4px;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
