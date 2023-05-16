import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};

/**
 * クエリパラメータはURLに条件式を付与することができる
 * 例えば/id?name=hogehogeのような感じ
 * React-domのuseLocationを使うとLocationオブジェクトを取得でき、
 * searchプロパティに?移行のクエリパラメータが入ってくる
 *
 *
 */
