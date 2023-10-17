import errImg from "@/assets/images/404.png";
import { Button, Col, Empty, Row } from "antd";
import React from "react";
import "./index.less";

const NotFound = (props) => {
  const { history } = props;
  const goHome = () => history.replace("/");
  return (
    <Row className="not-found">
      <Col span={24}> 
        <Empty className="empty" image={errImg} imageStyle={{ height: 300 }}  description={
          <>
            <h1>404</h1>
            <h2>抱歉，你访问的页面不存在</h2>
            <div>
              <Button type="primary" onClick={goHome}>
                回到首页
              </Button>
            </div>
          </>
        }
      />
      </Col> 
    </Row>
  );
};

export default NotFound;
