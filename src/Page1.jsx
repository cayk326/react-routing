import { Link, useHistory } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()]; //DetailAに遷移する際に渡すデモデータ
  const history = useHistory();

  //JavaScript側からリンクに遷移させる方法
  // useHistoryを使って特定のURLに遷移
  const onClickDetailA = () => history.push("/page1/detailA"); //引数は遷移先のルート
  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
