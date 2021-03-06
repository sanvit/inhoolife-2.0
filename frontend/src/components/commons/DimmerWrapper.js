import styled from "styled-components";

const DimmerWrapper = styled.div`
  height: ${props => (props.height ? props.height : "100%")};
  padding: ${props => props.padding};
  background-color: rgba(
    0,
    0,
    0,
    ${props => (props.opacity ? props.opacity : "0.8")}
  );
`;

export default DimmerWrapper;
