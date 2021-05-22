import React from "react"

function App() {
  return (
    <div className="bg-gradient-to-br from-light-blue-400 to-indigo-500">
      <p>HIGHSCORE</p>
      <p>
        1. Namn Namnsson, 2021-05-22, 7p <br />
        2. Namn Namnsson, 2021-05-22, 7p <br />
        3. Namn Namnsson, 2021-05-22, 7p <br />
        4. Namn Namnsson, 2021-05-22, 7p <br />
        5. Namn Namnsson, 2021-05-22, 7p <br />
        6. Namn Namnsson, 2021-05-22, 7p <br />
        7. Namn Namnsson, 2021-05-22, 7p <br />
        8. Namn Namnsson, 2021-05-22, 7p <br />
        9. Namn Namnsson, 2021-05-22, 7p <br />
        10. Namn Namnsson, 2021-05-22, 7p
      </p>
      <p>NYTT RESULTAT</p>
      <input defaultValue="NAMN"></input>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}

export default App
