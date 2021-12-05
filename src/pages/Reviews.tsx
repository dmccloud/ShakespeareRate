import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
} from "@elastic/eui";
import React from "react";
import { ReviewCard } from "../components/ReviewCard";

interface ReviewsProps {
  data?: {
    rating: number;
    publish_date: string;
    id: string;
    body: string;
    author: string;
  }[];
}

export const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  return (
    <EuiPage aria-label="review-area">
      <EuiPageBody paddingSize="l">
        <EuiPageHeader pageTitle="Reviews" bottomBorder />

        {/* single column to store cards with each review */}
        <EuiFlexGrid columns={1}>
          {
            // if there are reviews
            data ? (
              // map through each review
              data.map((item: any, index: number) => {
                // render a card with the details of the review
                return (
                  <EuiFlexItem>
                    <ReviewCard review={item} />
                  </EuiFlexItem>
                );
              })
            ) : (
              // if no data, render loading
              <div>Loading...</div>
            )
          }
        </EuiFlexGrid>
      </EuiPageBody>
    </EuiPage>
  );
};
