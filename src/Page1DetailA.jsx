import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  //分割代入でUseLocationというhooksのreturnであるlocationの中のstateを展開
  // page1からDetailAに遷移するときのstateとしてarrを渡している
  const { state } = useLocation();
  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1 DetailA</h1>
      <br />
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
