import { EuiAvatar, EuiCard, EuiText } from "@elastic/eui";
import moment from "moment";

import React from "react";

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
  return (
    <EuiCard
      layout="horizontal"
      icon={<EuiAvatar size="xl" name={review.author} />}
      title={review.author}
      description={
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
            <h2>Rating: {review.rating} / 5</h2>
          </EuiText>
        </div>
      }
      onClick={() => {}}
    />
  );
};
