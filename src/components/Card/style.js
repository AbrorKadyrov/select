// import styled from "styled-components";

// const Container = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 380px;
//   border: 1px solid #e6e9ec;
// `;
// const Wrapper = styled.div`
//   position: relative;
// `;

// const Button = styled.div`
//   position: absolute;

//   font-family: "Cerebri Sans";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 10px;
//   line-height: 13px;
//   color: #ffffff;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 73px;
//   height: 23px;
//   background: ${({ right }) => (right ? "#0d263b" : "#0061df")};
//   border-radius: 3px;

//   margin-top: 20px;
//   left: ${({ right }) => !right && "20px"};
//   right: ${({ right }) => right && "20px"};
// `;

// const Img = styled.img`
//   width: 100%;
//   max-width: 380px;
//   max-height: 220px;
// `;

// const User = styled.img`
//   position: absolute;
//   right: 22px;
//   top: -19px;
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   border: 2px solid white;
// `;

// const Title = styled.div`
//   font-family: "Montserrat";
//   font-style: normal;
//   line-height: 24px;
//   color: ${({ desc }) => (desc ? "#696969" : "#0d263b")};
//   font-weight: ${({ desc }) => (desc ? "400" : "600")};
//   font-size: ${({ desc }) => (desc ? "14px" : "16px")};
//   margin-top: ${({ desc }) => !desc && "24px"};
//   margin-bottom: ${({ desc }) => desc && "16px"};
//   margin-left: 20px;
// `;

// const Content = styled.div`
//   width: ${({ wrap }) => wrap && "100%"};
//   max-width: ${({ wrap }) => wrap && "380px"};
//   margin: ${({ wrap }) => !wrap && "0px 20px"};
//   display: flex;
//   flex-direction: ${({ wrap }) => (wrap ? "row" : "column")};
//   justify-content: ${({ wrap }) => (wrap ? "space-between" : "center")};
//   align-items: ${({ wrap }) => !wrap && "center"};
//   border-bottom: ${({ wrap }) => wrap && "1px solid  #E6E9EC"};
// `;

// Content.Title = styled(Title)`
//   margin: 0;
// `;

// const Icons = styled.img`
//   width: 19px;
//   height: 19px;
// `;

// const Price = styled.div`
//   display: flex;
//   padding: 8px 20px;
//   justify-content: space-between;
//   align-items: center;
// `;

// Price.Container = styled.div`
//   display: flex;
//   flex-direction: ${({ wrap }) => (wrap ? "row" : "column")};
//   align-items: ${({ wrap }) => wrap && "center"};
//   gap: ${({ wrap }) => wrap && "20px"};
// `;

// Price.Title = styled(Title)`
//   margin: 0;
//   font-size: ${({ desc }) => desc && "12px"};
// `;

// const Loveicons = styled.img`
//   width: ${({ like }) => (like ? "35px" : "15px")};
//   height: ${({ like }) => (like ? "35px" : "15px")};
//   & path {
//     fill: red;
//     stroke: red;
//   }
//   :active {
//     transform: scale(0.9);
//   }
// `;

// export {
//   Container,
//   Icons,
//   Loveicons,
//   Content,
//   Wrapper,
//   Price,
//   Img,
//   Button,
//   User,
//   Title,
// };
