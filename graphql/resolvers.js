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

const people = [
  {
    id : 0,
    name : "Nicolas",
    age : 18,
    gender : "female"
  },
  {
    id : 1,
    name : "David",
    age : 21,
    gender : "male"
  }
]

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id}) => people.filter(person => person.id === id)[0]
  }
}

export default resolvers