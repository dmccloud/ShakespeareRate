import { EuiAvatar, EuiCard, EuiText } from "@elastic/eui";
import moment from "moment";

import React from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

interface ReviewCardProps {
  review: {
    rating: number;
    publish_date: string;
    id: string;
    body: string;
    author: string;
  };
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const navigate = useNavigate();
  return (
    <EuiCard
      aria-label="review-card"
      layout="horizontal"
      icon={<EuiAvatar size="xl" name={review.author} />}
      title={review.author}
      description={
        // formats date to be human readable
        <div>
          <EuiText>
            <h3>
              {" "}
              Date:{" "}
              {moment(review.publish_date, "YYYY-MM-DDTHH:mm:ss").format(
                "MM/DD/YYYY hh:mmA"
              )}
            </h3>
          </EuiText>

          <EuiText>
            <h2>
              Quote: "<em>{review.body}</em>"
            </h2>
          </EuiText>
          <EuiText>
            <h2>
              Rating: <StarRatings rating={review.rating} numberOfStars={5} />
              {"("}
              {review.rating}
              {")"}
            </h2>
          </EuiText>
        </div>
      }
      onClick={() => {
        navigate(`/${review.id}`);
      }}
    />
  );
};
