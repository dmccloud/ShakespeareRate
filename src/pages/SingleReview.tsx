import {
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLoadingContent,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";

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
  const id = location.pathname.substring(1); // gets the id from the route for use in
  // fetching the single quote

  // Fetching this data might be redundant, since we have the
  // review from the first page... but wanted to make some
  // use out of both routes provided
  useEffect(() => {
    const fetchData = async () => {
      // fetches single review
      const reviews = await axios({
        method: "get",
        url: `https://shakespeare.podium.com/api/reviews/${id}`,
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` },
      });

      // sets state to hold review data
      setData(reviews.data);
    };
    fetchData();
  }, [id]);

  // If no data, show loading, else show review data
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
        <EuiFlexGroup gutterSize="xl">
          <EuiFlexItem>
            <EuiCard
              layout="horizontal"
              icon={<EuiIcon size="xl" type={"quote"} />}
              title={"Quote"}
              description={`"${data.body}""`}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              layout="horizontal"
              icon={<EuiIcon size="l" type={"starFilledSpace"} />}
              titleSize="xs"
              title={"Rating"}
              description={
                <div>
                  <StarRatings rating={data.rating} numberOfStars={5} /> {"("}
                  {data.rating}
                  {")"}
                </div>
              }
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              layout="horizontal"
              icon={<EuiIcon size="l" type={"calendar"} />}
              titleSize="xs"
              title={"Rating Date"}
              description={
                <EuiText>
                  <h3>
                    {moment(data.publish_date, "YYYY-MM-DDTHH:mm:ss").format(
                      "MM/DD/YYYY hh:mmA"
                    )}
                  </h3>
                </EuiText>
              }
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageBody>
    </EuiPage>
  );
};
