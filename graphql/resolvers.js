//localhost:4000의 playground에서

// query{
// 	name 
// }

//라는 아주 간단한 쿼리를 보내면 

// {
//   "data": {
//     "name": "nicolas"
//   }
// }

//라는 아주 간단한 응답을 하는 api 상태


const resolvers = {
  Query: {
    name: () => "nicolas"
  }
}

export default resolvers