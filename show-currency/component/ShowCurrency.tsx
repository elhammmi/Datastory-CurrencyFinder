import styles from "@/styles/ShowCurrency.module.css";
import { Input, Flex, Space, Typography, Row, Col } from "antd";
const { Search } = Input;
const ShowCurrency = () => {
  return (
    <div>
      <Row className={styles.row}>
        <Col md={6} lg={8} xl={10}>
          <Flex className={styles.boxStyle} wrap="wrap" justify="center">
            <h1 className={styles.header}>Show Currency App</h1>
            <Search
              style={{ paddingTop: "10px" }}
              placeholder="Enter the country name like: Sweden"
              enterButton="Search"
              size="large"
            />
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default ShowCurrency;
