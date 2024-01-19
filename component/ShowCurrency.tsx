import styles from "@/styles/ShowCurrency.module.css";
import { Input, Flex, Typography, Row, Col } from "antd";
const { Search } = Input;
const { Paragraph, Text } = Typography;
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const ShowCurrency = () => {
  const [searchValue, setSearchValue] = useState("");
  const GET_CURRENCY = gql`
    query GetCurrency($countryName: String!) {
      item(
        where: { class_id: { _eq: "Country" }, nameEn: { _eq: $countryName } }
      ) {
        nameEn
        currency: statements(where: { property_id: { _eq: "currency" } }) {
          object {
            nameEn
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CURRENCY, {
    variables: { countryName: searchValue },
  });

  const handleSearch = (value: string) => {
    let filteValue = value.trim();
    let arr = filteValue.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let finalValue = arr.join(" ");

    setSearchValue(finalValue);
  };
  return (
    <div>
      <Row className={styles.row}>
        <Col md={6} lg={8} xl={10}>
          <Flex className={styles.boxStyle} wrap="wrap" justify="center">
            <h1 className={styles.header}>Show Currency App</h1>
            <Search
              loading={loading}
              style={{ paddingTop: "10px" }}
              placeholder="Enter the country name like: Sweden"
              enterButton="Search"
              size="large"
              onSearch={handleSearch}
            />
            {searchValue && !error ? (
              <div>
                {data?.item.length > 0 ? (
                  <Paragraph>
                    The currency of {searchValue} is: {""}
                    <Text type="success">
                      {data.item[0].currency[0].object.nameEn}
                    </Text>
                  </Paragraph>
                ) : (
                  !loading && (
                    <Paragraph type="danger">
                      The name of country is not correct.
                    </Paragraph>
                  )
                )}
              </div>
            ) : (
              ""
            )}
            {error && <Paragraph type="warning">An error occurred!</Paragraph>}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default ShowCurrency;
