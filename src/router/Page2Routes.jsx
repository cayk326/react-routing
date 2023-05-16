import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";
/**
 *
 * Page2配下の画面遷移を定義
 * 配列の中にそれぞれの画面の設定がかかれている
 * これをRouterで読み込む
 *
 * Page2ではURL Parameterを扱う
 * URL Parameterは動的にURLを変更するためにIDなどをDBなどから取得して
 * そのURLに応じた処理を実行するために使ったりする。
 * 典型的な例だとAPI
 *
 *
 */
export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id", //Url Parameterとした扱うためにコロンを記載したうえでパラメータ名を書く
    exact: false,
    children: <UrlParameter />
  }
];
