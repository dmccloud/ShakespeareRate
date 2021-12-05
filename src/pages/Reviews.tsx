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
    <EuiPage>
      <EuiPageBody paddingSize="l">
        <EuiPageHeader pageTitle="Reviews" bottomBorder />

        <EuiFlexGrid columns={1}>
          {data ? (
            data.map((item: any, index: number) => {
              return (
                <EuiFlexItem>
                  <ReviewCard review={item} />
                </EuiFlexItem>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </EuiFlexGrid>
      </EuiPageBody>
    </EuiPage>
  );
};
