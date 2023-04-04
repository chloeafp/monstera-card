import CareScale from "./CareScale";
import { useState } from "react";
import styled from "styled-components";

function PlantItem({ plant }) {

 const PositionRelative = styled.div`
 position: relative;
 height: 200px;
width: 200px;
margin-bottom: 15%;

 `
  const ImagePlant = styled.img`
    height: 200px;
    width: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
  `;

  const HiddentText = styled.p`
    position: absolute;
    height: 200px;
    width: 200px;
    bottom: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    right: 0;
    background: rgba(29, 106, 154, 0.72);
    color: #fff;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
	text-align: center;
    transition: opacity 0.2s, visibility 0.2s;
  `;
  const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    font-family: Sans-serif;
    font-weight: 400;
    text-align: center;
  `;
  const Like = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg");
    background-size: 100%;
    transition: transform 0.4s;
    &:active {
      transform: scale(1.3);
    }
  `;

  const UnLike = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg");
    background-size: 100%;
    transition: transform 0.4s;
    &:active {
      transform: scale(1.3);
    }
  `;

  const TableauElementCard = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 11px;
  `;

  const StyleCareScale = styled.div`
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.3);
    }
  `;

  const [isLiked, setIsLiked] = useState(false);

  function handleClickLiked() {
    setIsLiked(!isLiked);
  }

  return (
    <div>
      <PositionRelative>
        <ImagePlant src={plant.cover} alt={`${plant.name} cover`} />
        <HiddentText>
          <span style={{fontWeight:800}}>Did you know?</span> <br /><br />
          Monstera is one of the best plants for purifying household air
          pollution 😉
        </HiddentText>
      </PositionRelative>
      <Title>{plant.name}</Title>
      <TableauElementCard>
        <div>
          <StyleCareScale>
            <CareScale careType="water" scaleValue={plant.water} />
          </StyleCareScale>
          <StyleCareScale>
            <CareScale careType="light" scaleValue={plant.light} />
          </StyleCareScale>
        </div>
        {!isLiked ? (
          <Like onClick={handleClickLiked} />
        ) : (
          <UnLike onClick={handleClickLiked} />
        )}
      </TableauElementCard>
    </div>
  );
}

export default PlantItem;
