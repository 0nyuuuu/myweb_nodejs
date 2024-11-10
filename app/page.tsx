export default function Home() {
  return (
    <div>
      <MyButton name="Admin" nickname="user" age={18} today={new Date()}/>
      </div>
  );
}

// function MyButton({name} : {name : string}) {
//   return <button>I am {name}</button>
// }

type Tparams = {
  name: string
  nickname: string
  age: number
  today: Date
}

function MyButton(params: Tparams) {
  return <button>I am {params.name}. My nickname is {params.nickname}. My age is {params.age}. {params.today.getDate()}</button>
}