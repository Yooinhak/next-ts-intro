import Menu from '../component/menu';
import styled from 'styled-components';

const StyleButton = styled.button`
  background-color: pink;
  border: none;
  color: white;
  padding: 13px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default function about() {
  return (
    <div>
      <Menu />
      <div>Love is samyetang chikin~ TS</div>
      <StyleButton>버튼</StyleButton>
    </div>
  );
}
