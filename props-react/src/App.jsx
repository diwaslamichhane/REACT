import Card from './components/Card'

function App() {

  return (
    <>
      <div>
        <h1 className="text-5xl text-pink-800 bg-black mb-5">Tailwind & Props</h1>
      </div>
      <div className="flex gap-7 justify-center">
        <Card username ="Diwas" priceTag = "$20" />
        <Card username ="Utsab" priceTag = "$10"/>
        <Card username ="Pradeepta" priceTag ="$05"/>
      </div>
    </>
  )
}

export default App
