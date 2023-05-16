import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  //分割代入でUseLocationというhooksのreturnであるlocationの中のsearchを展開
  const { search } = useLocation();
  //URLSearchParamsはクエリパラメータを便利に扱うためのメソッドを提供してくれる
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameter Page</h1>
      <p>parameter is {id}.</p>
      <p>parameter is {query.get("name")}.</p>
    </div>
  );
};
