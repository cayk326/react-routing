/**
 * match: { url }は分割代入の記法で
 * 例えばconst obj1 = { id: 1, name: "名前" };というオブジェクトの場合
 * const { id } = obj1とすると、obj1の中にidプロパティがあればその中身を返し
 * 存在しなければundefinedが返ってくる
 *
 * ここで、Routeコンポーネントの中の第二引数としてurlを取得するため、
 * 1行で記載しないといけない
 * render引数に関数名なし、つまり無名関数で()=>(式)というアロー関数が入っている
 *外側の{}はJSXを書くという宣言のようなもの
 * ここでは{match : { url }}と分割代入を入れ子にすることで
 * urlをワンラインで抽出する
 *{ match: { url } }はpropsからmatchをうけとりmatchからurlを受け取り、
 * 引数としてurlを得る。そのため、当然matchは参照できない
 *
 */
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route
        path="/page1"
        render={({ match: { url } }) => (
          /**
           * Page1 Route配下のSwitchでPage1Routesのオブジェクトを読み込み
           * key, exact, pathを取り出して設定している
           * page1配下のページ数だけループ実行
           */
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route
        path="/page2"
        render={({ match: { url } }) => (
          /**
           * Page2 Route配下のSwitchでPage2Routesのオブジェクトを読み込み
           * key, exact, pathを取り出して設定している
           * page2配下のページ数だけループ実行
           */
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
