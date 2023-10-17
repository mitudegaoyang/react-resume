import menuList from "@/config/menuConfig";
import routeList from "@/config/routeMap";
import { getMenuItemInMenuListByProperty } from "@/utils";
import { Layout } from "antd";
import React from "react";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const { Content } = Layout;

const getPageTitle = (menuList, pathname) => {
  let title = "前端工程师简历";
  let item = getMenuItemInMenuListByProperty(menuList, "path", pathname);
  if (item) {
    title = `${item.title} - 前端工程师简历`;
  }
  return title;
};

const LayoutContent = (props) => {
  const { role, location } = props;
  const { pathname } = location;
  const handleFilter = (route) => {
    // 过滤没有权限的页面
    return role === "admin" || !route.roles || route.roles.includes(role);
  };
  return (
    <DocumentTitle title={getPageTitle(menuList, pathname)}>
      <Content style={{ height: "calc(100% - 100px)" }}>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames="fade"
            exit={false}
          >
            <Switch location={location}>
              <Redirect exact from="/" to="/dashboard" />
              {routeList.map((route) => {
                return (
                  handleFilter(route) && (
                    <Route
                      component={route.component}
                      key={route.path}
                      path={route.path}
                    />
                  )
                );
              })}
              <Redirect to="/error/404" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </DocumentTitle>
  );
};

export default connect((state) => state.user)(withRouter(LayoutContent));
