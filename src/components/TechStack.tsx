import { useState } from "react"
import Title from "./Title"

const TechStack = () => {
  const [tabs, setTabs] = useState<number>(1)

  function handleChangeTab(id: number) {
    setTabs(id)
  }
  return (
    <section className="flex flex-col items-center mt-20">
      <Title>Tech stack</Title>
      <div className="flex flex-col gap-4">
        <div className="flex space-x-3">
          <button
            className={`${tabs == 1 && "bg-primary"} px-3 py-2 rounded-md`}
            onClick={() => handleChangeTab(1)}
          >
            languge
          </button>
          <button
            className={`${tabs == 2 && "bg-primary"} px-3 py-2 rounded-md`}
            onClick={() => handleChangeTab(2)}
          >
            framework
          </button>
          <button
            className={`${tabs == 3 && "bg-primary"} px-3 py-2 rounded-md`}
            onClick={() => handleChangeTab(3)}
          >
            styling
          </button>
        </div>
        <div className={`${tabs === 1 ? "block" : "hidden"}`}>
          javascript, typescript
        </div>
        <div className={`${tabs === 2 ? "block" : "hidden"}`}>
          react js, next js
        </div>
        <div className={`${tabs === 3 ? "block" : "hidden"}`}>tailwind css</div>
      </div>
    </section>
  )
}

export default TechStack
