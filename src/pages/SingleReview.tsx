import {
  EuiFlexGrid,
  EuiLoadingContent,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiSpacer,
} from "@elastic/eui";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SingleReviewProps {
  ReviewType?: {
    rating: number;
    publish_date: string;
    id: string;
    body: string;
    author: string;
  };
}

export const SingleReview: React.FC<SingleReviewProps> = ({ ReviewType }) => {
  const [data, setData] = useState<typeof ReviewType>();
  const location = useLocation();
  const id = location.pathname.substring(1);
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      // fetches list of reviews
      const reviews = await axios({
        method: "get",
        url: `https://shakespeare.podium.com/api/reviews/${id}`,
        headers: { "x-api-key": "H3TM28wjL8R4#HTnqk?c" },
      });

      // sets state to hold list of reviews
      setData(reviews.data);
    };
    fetchData();
  }, [id]);
  return !data ? (
    <EuiPage aria-label="review-area">
      <EuiPageBody paddingSize="l">
        <div>
          <EuiSpacer />
          <div>Loading...</div>
          <EuiLoadingContent lines={3} />
        </div>
        <EuiFlexGrid columns={1}></EuiFlexGrid>
      </EuiPageBody>
    </EuiPage>
  ) : (
    <EuiPage aria-label="review-area">
      <EuiPageBody paddingSize="l">
        <EuiPageHeader pageTitle={data.author} bottomBorder />

        <EuiFlexGrid columns={1}></EuiFlexGrid>
      </EuiPageBody>
    </EuiPage>
  );
};
