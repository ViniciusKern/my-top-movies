import {
  AdditionalInfoContainer,
  RatingContainer,
} from './MovieAdditionalInfo.styles';

import ratingImg from '../../../assets/star.png';

type MovieAdditionalInfoProps = {
  voteAverage: number;
  releaseYear: string;
};

function MovieAdditionalInfo(props: MovieAdditionalInfoProps) {
  return (
    <AdditionalInfoContainer>
      <RatingContainer>
        <img src={ratingImg} /> {props.voteAverage}
      </RatingContainer>
      {props.releaseYear}
    </AdditionalInfoContainer>
  );
}

export default MovieAdditionalInfo;
